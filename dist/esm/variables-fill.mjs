export const name="variables-fill";
export const id="dl_44414d5e453e2037e14b";
export const url=new URL("../icons/variables-fill.svg?v=8e3ad23e4f60753c47135a6a57e925321a3cfd47bc29e8c5683e7eea0f232832",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
