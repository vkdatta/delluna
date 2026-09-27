export const name="hash-straight-fill";
export const id="dl_776e70ccde68421489ce";
export const url=new URL("../icons/hash-straight-fill.svg?v=dcaef32417ea61036e0b1afb60fb5094d86b40d2f2954ffb50bd46a3741d10ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
