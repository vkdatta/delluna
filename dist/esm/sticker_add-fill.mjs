export const name="sticker_add-fill";
export const id="dl_0af05de48aca445fb3a3";
export const url=new URL("../icons/sticker_add-fill.svg?v=d73d768a0289ab5dee1768392c4a46cb13587c24621df745f07fa6c4a428ab59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
