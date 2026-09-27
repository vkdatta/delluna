export const name="hourglass_arrow_down";
export const id="dl_931bb56378eac9cbe41e";
export const url=new URL("../icons/hourglass_arrow_down.svg?v=6a26a6f4e071d145a8fed55d09f1d8d0cb78d359b3a056f250459a1992f2f6f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
