export const name="sneaker-move";
export const id="dl_423a29d8dade49e38b26";
export const url=new URL("../icons/S/sneaker-move.svg?v=5eb0421722132c92faa1024e9a046ac4c933ac19591968548074e323524e16a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
