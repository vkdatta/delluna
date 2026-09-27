export const name="woman_2-fill";
export const id="dl_0bb1f4c18f0955f2fea0";
export const url=new URL("../icons/woman_2-fill.svg?v=4454f38b9b8a392bd18863e8564d441fa252a799112e3f5087783c2b7ccf525f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
