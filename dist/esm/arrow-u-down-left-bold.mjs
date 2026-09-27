export const name="arrow-u-down-left-bold";
export const id="dl_f16b99315f71422093b3";
export const url=new URL("../icons/arrow-u-down-left-bold.svg?v=599c77bc0beb7307d60eebd8b64f1cc364914b0be62d4b6314a9114a1e6ae568",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
