export const name="tote-simple-duotone";
export const id="dl_2bbcf66e7c684ea395ab";
export const url=new URL("../icons/T/tote-simple-duotone.svg?v=75f2b88bc6f3bb77d2dc9251e56011a22aff652014c125b343ddb24b6742d7fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
