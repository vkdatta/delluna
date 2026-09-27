export const name="lucid_1-circle-gauge";
export const id="dl_98fcfff312d34d87b4ca";
export const url=new URL("../icons/lucid_1-circle-gauge.svg?v=4a181eef9b314dcd9086cd29b6d7943c772644f2044083ccbbb638f4fb404639",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
