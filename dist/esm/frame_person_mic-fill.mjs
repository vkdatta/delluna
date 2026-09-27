export const name="frame_person_mic-fill";
export const id="dl_cb90244acf5bde5990c7";
export const url=new URL("../icons/frame_person_mic-fill.svg?v=b95afa8e993f82fd6ee1ec0e5cadd4e69420f4d68a4b601680606a408e1ba23b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
