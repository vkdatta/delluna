export const name="lucid_3-projector";
export const id="dl_d6c54e8d283b46798170";
export const url=new URL("../icons/lucid_3-projector.svg?v=5d606d0509ab4a6309aa9f0036cb325815bdab40fba93224c6509d4d9c3b3ce5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
