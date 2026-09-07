export const name="lucid_3-paw-print";
export const id="dl_f8c34de090684c748f2f";
export const url=new URL("../icons/lucid_3-paw-print.svg?v=fe36e38f79dfb0b557b18fd091cdde0d902310d1479cb72a0f9467a8a59848d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
