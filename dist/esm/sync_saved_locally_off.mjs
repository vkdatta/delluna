export const name="sync_saved_locally_off";
export const id="dl_639ddb47258cf9522bf3";
export const url=new URL("../icons/sync_saved_locally_off.svg?v=dcf7bbe58134a351bc5341b19ed4a0b8cee61c6d18e7958bc594bdae040b5d0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
