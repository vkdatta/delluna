export const name="lucid_2-file-volume";
export const id="dl_9d39fa3d4cbf40e784dc";
export const url=new URL("../icons/lucid_2-file-volume.svg?v=383fa60ae310426b137aee118f02afb78c9116415b057c97b6044f21d142512f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
