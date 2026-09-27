export const name="google-chrome-logo-fill";
export const id="dl_05ed6ccca70f4929b451";
export const url=new URL("../icons/google-chrome-logo-fill.svg?v=0b51f773685fa9721e7e5b4c0a159b0a9f94fb3c9bc2ce07c617925d5cda0b07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
