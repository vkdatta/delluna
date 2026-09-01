export const name="settings";
export const id="dl_cc53255635bc0be73c50";
export const url=new URL('../icons/settings.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
