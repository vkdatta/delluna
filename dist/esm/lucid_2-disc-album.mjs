export const name="lucid_2-disc-album";
export const id="dl_28c89dd81ac34fb3aaf1";
export const url=new URL("../icons/lucid_2-disc-album.svg?v=5e2b1d347c9a9f94dd790c0b366af33ceee609a7837714d44142321822b877b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
