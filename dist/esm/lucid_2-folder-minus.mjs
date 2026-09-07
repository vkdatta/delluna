export const name="lucid_2-folder-minus";
export const id="dl_7aea585323ad4368bd5b";
export const url=new URL("../icons/lucid_2-folder-minus.svg?v=c8852f5520b2eca333261a949310f90211dd8ac8bd8710834247ac39f278d13f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
