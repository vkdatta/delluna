export const name="dry";
export const id="dl_0e7f8580cdc9443da492";
export const url=new URL("../icons/dry.svg?v=0c1d167cd7379ac2d1b5ee79c8ab29ac1c43c37f0acb9e6cf336d21f9e8ca708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
