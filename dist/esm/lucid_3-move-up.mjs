export const name="lucid_3-move-up";
export const id="dl_97651828110d4c5a8285";
export const url=new URL("../icons/lucid_3-move-up.svg?v=6fcb1b5160347298e728c0940424eddc3ece73f8dff193f4925fa07b6f2c9b9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
