export const name="lucid_2-file-volume";
export const id="dl_9d39fa3d4cbf40e784dc";
export const url=new URL("../icons/lucid_2-file-volume.svg?v=45e2686101b2e7cf02c1d6ee07a0ec35583ec4a88404ce699c757224be5ad6a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
