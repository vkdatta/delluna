export const name="earbud_right";
export const id="dl_4c8b11302a1797d8b9d0";
export const url=new URL("../icons/earbud_right.svg?v=0d31b61e52a0cd1e4ffae1833e8ff35fa7f0705156d6829e2d990765f19c50f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
