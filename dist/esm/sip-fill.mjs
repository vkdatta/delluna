export const name="sip-fill";
export const id="dl_fff6b56a1681a0d9ae23";
export const url=new URL("../icons/sip-fill.svg?v=7a93f2a0c3a1b2da9fe6923a82b3d36993009364cafc82ab8fcaae69b032efe2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
