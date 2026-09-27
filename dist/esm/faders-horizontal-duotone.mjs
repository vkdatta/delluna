export const name="faders-horizontal-duotone";
export const id="dl_55c5e00e1ed9458f8868";
export const url=new URL("../icons/faders-horizontal-duotone.svg?v=e29744859c1ce38afe7750d354fde10d51cea9e680b89a70f180e8dd576cc89c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
