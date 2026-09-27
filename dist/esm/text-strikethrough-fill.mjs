export const name="text-strikethrough-fill";
export const id="dl_d942903e1c13547eb2db";
export const url=new URL("../icons/text-strikethrough-fill.svg?v=8f15e0902cc7c12148cfe55e4a21e445c86eeea96f91e131363892f3f0a3844c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
