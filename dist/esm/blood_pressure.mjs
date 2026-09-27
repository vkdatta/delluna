export const name="blood_pressure";
export const id="dl_597b411889adbc4eb6ce";
export const url=new URL("../icons/blood_pressure.svg?v=ac51fe91c2a15a1179af11e155209a7fc0b68b7817cfd62c753308ed33c0f5fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
