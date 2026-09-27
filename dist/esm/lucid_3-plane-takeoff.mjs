export const name="lucid_3-plane-takeoff";
export const id="dl_ed73f1284cf54ba299ff";
export const url=new URL("../icons/lucid_3-plane-takeoff.svg?v=e77d86b8c887a4d9237cc06be92463ca9ebae81902b1477bb024792fb1c71866",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
