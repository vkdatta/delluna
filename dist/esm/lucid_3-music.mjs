export const name="lucid_3-music";
export const id="dl_e0ee30c8541146b3b5ca";
export const url=new URL("../icons/lucid_3-music.svg?v=15f38967b5755b78b5dc65d296932effdc75ce03e13abfdafc995881a7de1c8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
