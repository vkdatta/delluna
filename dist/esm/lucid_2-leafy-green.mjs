export const name="lucid_2-leafy-green";
export const id="dl_1c938c8da3104940ad4b";
export const url=new URL("../icons/lucid_2-leafy-green.svg?v=fc9fb9485eeade98a614911a32ab78c5b971155cb11d50f23de0f5fea82087ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
