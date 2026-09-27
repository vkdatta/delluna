export const name="settings_panorama";
export const id="dl_c3aecedf187fdfbc9d6b";
export const url=new URL("../icons/settings_panorama.svg?v=123c679b65b07db9b5967c6e3b5d0a35f9304bfbeaaa376b0b6401a7901787b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
