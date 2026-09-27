export const name="speaker-x-duotone";
export const id="dl_6c454683207fc6cc49c0";
export const url=new URL("../icons/speaker-x-duotone.svg?v=7be5ed2eacac9390c46e36e2f6a4c3403cc08fba0fc1cee721ccf7b63cca8f89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
