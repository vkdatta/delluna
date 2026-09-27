export const name="toast-fill";
export const id="dl_1e57be466d2c0e503ddc";
export const url=new URL("../icons/toast-fill.svg?v=9fca96940b7b792462f7f43c6ddf06500668ab5b4723a853b04044f97ac70cec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
