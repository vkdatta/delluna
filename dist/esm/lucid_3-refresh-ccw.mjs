export const name="lucid_3-refresh-ccw";
export const id="dl_4cf5da966b94416daf9d";
export const url=new URL("../icons/lucid_3-refresh-ccw.svg?v=12bc7ac45d4f302b50ee4da89f7c91d81688b0e10a028b373e02a5fab0157241",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
