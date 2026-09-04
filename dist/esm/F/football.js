export const name="football";
export const id="dl_8a6ef5950d9a4f8bb9c0";
export const url=new URL("../../icons/F/football.svg?v=61771bbacdf2283bbbab0aec8e65724dcc016fce810e80ea900d3a9e6d67532d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
