export const name="printer-light";
export const id="dl_4fc1c2a025c14fd3bf2e";
export const url=new URL("../icons/printer-light.svg?v=3b88e55369c8152593e8b3ba5cfdb3a33b27ec976f159831f528708f5e4443ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
