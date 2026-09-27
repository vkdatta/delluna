export const name="lucid_3-shield-ban";
export const id="dl_185d954e3cd546af8803";
export const url=new URL("../icons/lucid_3-shield-ban.svg?v=6b810b28fda7477fd0c882f70633f1994f88e48bb73c8d5c12696f228827224e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
