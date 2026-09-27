export const name="backup";
export const id="dl_4e0c55182e0aee5ed87e";
export const url=new URL("../icons/backup.svg?v=2ee6ffb837e9c538dd97bbb9356c20b82615efe36862c001b4d56bf6aaeca781",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
