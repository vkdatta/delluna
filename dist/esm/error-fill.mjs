export const name="error-fill";
export const id="dl_5e4403869fa44222db14";
export const url=new URL("../icons/error-fill.svg?v=dc5ebdc2f693e9b0724fee4da6c5430440c4b8afc2b31c47f906ee3fbd677afd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
