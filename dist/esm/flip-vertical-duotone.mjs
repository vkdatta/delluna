export const name="flip-vertical-duotone";
export const id="dl_d43dbb18341548388f0d";
export const url=new URL("../icons/flip-vertical-duotone.svg?v=36e623f16b2594af8878ea86edcca0605e72e75be001aeaf831cf11cd22adb23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
