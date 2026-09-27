export const name="ecg";
export const id="dl_1c2a5362090e917d847d";
export const url=new URL("../icons/ecg.svg?v=0741c39f21b53e5a855c579e811bfe4579c99ba9b0745b3d7d59c6ee29ff6b4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
