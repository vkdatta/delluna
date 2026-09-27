export const name="parking_valet";
export const id="dl_43ee2ec37267b2dffb41";
export const url=new URL("../icons/parking_valet.svg?v=dc1b256bf7c5b5ecd787820e564c666276ce3b59a1843ecdf4f962090ccff6ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
