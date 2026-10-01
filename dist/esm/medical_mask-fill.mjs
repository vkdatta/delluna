export const name="medical_mask-fill";
export const id="dl_d3d7d574f396ee0e4f8e";
export const url=new URL("../icons/medical_mask-fill.svg?v=206f1c806dfa53509f84cee43ea15001983e01dee4f9255beb47fe2e181b9341",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
