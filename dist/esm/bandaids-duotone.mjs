export const name="bandaids-duotone";
export const id="dl_8a4d13e939994c6999d7";
export const url=new URL("../icons/bandaids-duotone.svg?v=8a57b6ee78d930771a17551cba1d67535ade3946d3fd29bd4099a86877ecca1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
