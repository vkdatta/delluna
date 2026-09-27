export const name="door-open-fill";
export const id="dl_104e8efefd0a41418cb0";
export const url=new URL("../icons/door-open-fill.svg?v=e609362ca0b585048e6e018314d8d79a12d05df698c31904ac7afeea8ed15058",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
