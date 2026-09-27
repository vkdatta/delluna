export const name="crop_free";
export const id="dl_d1f642d842765577ea1e";
export const url=new URL("../icons/crop_free.svg?v=50d100ad1c0c3ba69119d873a676b9f6c2e10273f29ef7084c9c62984faa8d6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
