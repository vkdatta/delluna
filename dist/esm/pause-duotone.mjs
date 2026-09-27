export const name="pause-duotone";
export const id="dl_c06a7599334e4bd6bb3d";
export const url=new URL("../icons/pause-duotone.svg?v=890225cedc14d9f480e5ef5fc62c4656c1ddc58e881548f5e015c0984f57b568",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
