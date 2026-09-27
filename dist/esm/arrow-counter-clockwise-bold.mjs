export const name="arrow-counter-clockwise-bold";
export const id="dl_a941cf36d1c84a429670";
export const url=new URL("../icons/arrow-counter-clockwise-bold.svg?v=22fc1361795a5afdd735e8309280fb7fbfdfcce9fc2f115e4f486af9b1b32044",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
