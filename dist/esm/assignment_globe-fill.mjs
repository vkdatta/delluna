export const name="assignment_globe-fill";
export const id="dl_ffb8928dde0c44b4b636";
export const url=new URL("../icons/A/assignment_globe-fill.svg?v=32e7eb80d8de5b341a16f868f82e02a8f16947f023e0be7e2a3bf4087cb0c7ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
