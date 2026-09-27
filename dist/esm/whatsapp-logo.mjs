export const name="whatsapp-logo";
export const id="dl_4b46cfcfd973f75ed0d7";
export const url=new URL("../icons/whatsapp-logo.svg?v=335d2821b28cb2aa5fdac75971f9c8feab5b4a957f0d6793067d69ca416e2b6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
