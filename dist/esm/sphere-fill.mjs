export const name="sphere-fill";
export const id="dl_96344a19ecbce2a37805";
export const url=new URL("../icons/sphere-fill.svg?v=132101dda949ab0a3a4948edc44e026715c3c0f71fe2ded2499a2c8da8748edc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
