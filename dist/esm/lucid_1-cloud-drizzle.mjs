export const name="lucid_1-cloud-drizzle";
export const id="dl_eac6a7011dcb45e1841b";
export const url=new URL("../icons/lucid_1-cloud-drizzle.svg?v=adc5a99d580f604bc179d6ce44b1c81ab2e4cdfe8233db5a2437a041ce89bdf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
