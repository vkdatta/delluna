export const name="parking_sign";
export const id="dl_215a9cb5915c64a7a402";
export const url=new URL("../icons/parking_sign.svg?v=3f9e6051f266f074dc574b4baae5cf1978b88a145d9a05d56fe73b1c3db8e64a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
