export const name="phone_forwarded-fill";
export const id="dl_f86b10fbd45e44fdcedd";
export const url=new URL("../icons/phone_forwarded-fill.svg?v=a82959be88d9d755885924c0814f33347c6877a1e5247c493fb5fa0b0d70a625",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
