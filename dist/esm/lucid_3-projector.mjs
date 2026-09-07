export const name="lucid_3-projector";
export const id="dl_d6c54e8d283b46798170";
export const url=new URL("../icons/lucid_3-projector.svg?v=5958e9614759bc469bf14007dc73802d56cf81a3e528d6a8bdbbcf2c2f8f248c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
