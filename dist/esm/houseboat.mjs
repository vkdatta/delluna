export const name="houseboat";
export const id="dl_4a9f9c9f55ba60853959";
export const url=new URL("../icons/houseboat.svg?v=5b665fef71889573b0e7ab48d3981d11dd4be7fd5d8d99ed53adacb9e8a5e239",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
