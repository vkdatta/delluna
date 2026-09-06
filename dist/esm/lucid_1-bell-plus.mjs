export const name="lucid_1-bell-plus";
export const id="dl_7a211dca4cae4856837d";
export const url=new URL("../icons/lucid_1-bell-plus.svg?v=5a54cf856715a3c9da571ade2e1f6581fa3b5304bc55ff4712646846498d5223",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
