export const name="badge-fill";
export const id="dl_6b6c2463407e43ccbe0b";
export const url=new URL("../icons/badge-fill.svg?v=d4894b260221f270dd46a2c0e3d5106f0939dfff4f6e12fcf59cff4a930e7ade",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
