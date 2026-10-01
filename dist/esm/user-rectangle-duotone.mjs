export const name="user-rectangle-duotone";
export const id="dl_dcf35e9051083370becc";
export const url=new URL("../icons/user-rectangle-duotone.svg?v=6e43856678c2c9f9e8a44884cdaaf9b996155dd4e2a9df3941f1d93222c79cf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
