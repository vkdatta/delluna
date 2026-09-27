export const name="allergies-fill";
export const id="dl_198177f89d111e6344df";
export const url=new URL("../icons/allergies-fill.svg?v=0ab019f02a7fff6d03ee321dfb0092516c5038389483962ea8b5fd40934765f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
