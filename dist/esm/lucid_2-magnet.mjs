export const name="lucid_2-magnet";
export const id="dl_8dc8a0c0b3fc4f48b4ea";
export const url=new URL("../icons/lucid_2-magnet.svg?v=66b32f0a1fb841b4512cbd25a8b61dc3457b524de7950b416befbb7993b1b428",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
