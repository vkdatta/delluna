export const name="lucid_2-folder-root";
export const id="dl_c0025cdc4f074f338a84";
export const url=new URL("../icons/lucid_2-folder-root.svg?v=773b8603dac2b34f754d657b680d0b2afc9814d5be02baf6c8797085fe6bae19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
