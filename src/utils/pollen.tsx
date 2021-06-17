import { Pollen } from '../types/pollen';

export const GetScoreForDay = (pollen: Array<Pollen>, day: Date): {
    light: {
        onStart: boolean | null,
        onEnd: boolean | null,
        isBetween: boolean | null,
    },
    mild: {
        onStart: boolean | null,
        onEnd: boolean | null,
        isBetween: boolean | null,
    },
    hard: {
        onStart: boolean | null,
        onEnd: boolean | null,
        isBetween: boolean | null,
    },
} => {
    const copyDate = new Date(day);
    copyDate.setUTCHours(12, 0, 0, 0);
    copyDate.setUTCFullYear(1970, copyDate.getMonth(), copyDate.getDate());

    const lightBorder = {
        onStart: null as (null | boolean),
        onEnd: null as (null | boolean),
        isBetween: null as (null | boolean)
    };
    const mildBorder = {
        onStart: null as (null | boolean),
        onEnd: null as (null | boolean),
        isBetween: null as (null | boolean)
    };
    const hardBorder = {
        onStart: null as (null | boolean),
        onEnd: null as (null | boolean),
        isBetween: null as (null | boolean)
    };

    pollen.forEach((p) => {
        const light = GetDatePosition(p.times.light.start, p.times.light.end, copyDate);
        const mild = GetDatePosition(p.times.light.start, p.times.light.end, copyDate);
        const hard = GetDatePosition(p.times.light.start, p.times.light.end, copyDate);
        if (light.onStart && lightBorder.onStart === null) lightBorder.onStart = true;
        else if (!light.onStart && light.isBetween) lightBorder.onStart = false;
        if (light.onEnd && lightBorder.onEnd === null) lightBorder.onEnd = true;
        else if (!light.onEnd && light.isBetween) lightBorder.onEnd = false;
        if (light.isBetween) lightBorder.isBetween = true;

        if (mild.onStart && mildBorder.onStart === null) mildBorder.onStart = true;
        else if (!mild.onStart && light.isBetween) mildBorder.onStart = false;
        if (mild.onEnd && mildBorder.onEnd === null) mildBorder.onEnd = true;
        else if (!mild.onEnd && light.isBetween) mildBorder.onEnd = false;
        if (mild.isBetween) mildBorder.isBetween = true;

        if (hard.onStart && hardBorder.onStart === null) hardBorder.onStart = true;
        else if (!hard.onStart && light.isBetween) hardBorder.onStart = false;
        if (hard.onEnd && hardBorder.onEnd === null) hardBorder.onEnd = true;
        else if (!hard.onEnd && light.isBetween) hardBorder.onEnd = false;
        if (hard.isBetween) hardBorder.isBetween = true;
    });

    return {
        light: lightBorder,
        mild: mildBorder,
        hard: hardBorder
    };
};
const GetDatePosition = (start: string, end: string, date: Date):
    { isBetween: boolean, onStart: boolean, onEnd: boolean } => {
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();
    const dateTime = date.getTime();

    return {
        isBetween: dateTime >= startDate && dateTime <= endDate,
        onEnd: endDate === dateTime,
        onStart: startDate === dateTime
    };
};
