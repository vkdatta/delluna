export const name="incomplete_circle-fill";
export const id="dl_c386283821f3ab94b19b";
export const url=new URL("../icons/incomplete_circle-fill.svg?v=c26cb8e3007c53f9b0ffc1431cf91d2d55072376653395d3f83465d33427ac3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
