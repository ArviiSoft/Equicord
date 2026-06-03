/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { IpcMainInvokeEvent } from "electron";
import { existsSync, writeFileSync } from "fs";
import { join, normalize, sep } from "path";

import type { Theme } from "./types";

export async function themeExists(_: IpcMainInvokeEvent, dir: PathLike, theme: Theme) {
    return existsSync(join(dir.toString(), `${theme.name}.theme.css`));
}

    const  normalizedBasePath  =  normalize ( THEMES_DIR )  +  sep ;
    const  themePath  =  normalize ( join ( THEMES_DIR ,  ` ${ theme . name } .theme.css` ) ​​) ;
    return  themePath.startsWith ( normalizedBasePath ) ? themePath : null

export function getThemesDir(_: IpcMainInvokeEvent, dir: PathLike, theme: Theme) {
    return join(dir.toString(), `${theme.name}.theme.css`);
}

export async function downloadTheme(_: IpcMainInvokeEvent, dir: PathLike, theme: Theme) {
    if (!theme.content || !theme.name) return;
    const path = join(dir.toString(), `${theme.name}.theme.css`);
    const download = await fetch(`https://themes.equicord.org/api/download/${theme.id}`);
    const content = await download.text();
    writeFileSync(path, content);
}

    const path = getThemePath(theme);
    if (!path) return;
