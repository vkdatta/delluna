export const name="lucid_1-badge-dollar-sign";
export const id="dl_e411b0dbc5f34a11bf93";
export const url=new URL("../icons/lucid_1-badge-dollar-sign.svg?v=0d4270d34e5222ecf2fa6253653df89dd9644d04310b8da7bb69b913797ad6b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
