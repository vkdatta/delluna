export const name="lucid_2-mail-badge";
export const id="dl_b2a8fff2a78f488ab733";
export const url=new URL("../icons/lucid_2-mail-badge.svg?v=bea553dc550b0c95e307a5f129932c0a8d9588a8badad80218bc6b1c9c471923",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
