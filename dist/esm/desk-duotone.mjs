export const name="desk-duotone";
export const id="dl_b9ece332600746838f0c";
export const url=new URL("../icons/desk-duotone.svg?v=28f912cedba33259574414aba78f64e37fa4f394af6a2fd70f43f9564d21eb2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
