export const name="stack-overflow-logo";
export const id="dl_0a10fa0415614dedb1c2";
export const url=new URL("../icons/S/stack-overflow-logo.svg?v=e20b5fc1a35b9613a57971758e6c54ebff413a376bdec96e1854302836fee653",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
