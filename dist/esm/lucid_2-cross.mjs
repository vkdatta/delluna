export const name="lucid_2-cross";
export const id="dl_b4beae219421476e9c6a";
export const url=new URL("../icons/lucid_2-cross.svg?v=768af23d0240f9951af3476d4a8112eac53010c3745be5815d3aa4794125fc50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
