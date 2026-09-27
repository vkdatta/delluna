export const name="lucid_1-badge-dollar-sign";
export const id="dl_e411b0dbc5f34a11bf93";
export const url=new URL("../icons/lucid_1-badge-dollar-sign.svg?v=ec5a1f678855acbf99573ca717d8b1d4908897abb8adfc7d5f7164e9f34a31c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
