export const name="person_pin_circle";
export const id="dl_53f517eaaacb90abdf9e";
export const url=new URL("../icons/person_pin_circle.svg?v=87b7a0a67c20695079c10c76d9fbd2ff2bb631e0c330562b9231a9b32cb5c956",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
