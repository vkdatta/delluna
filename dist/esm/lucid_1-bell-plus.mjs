export const name="lucid_1-bell-plus";
export const id="dl_7a211dca4cae4856837d";
export const url=new URL("../icons/lucid_1-bell-plus.svg?v=bf39d35100632c698882723e5c8378f273f4a9dfb0128f7c3409a088d60396e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
