export const name="face_down-fill";
export const id="dl_31e9393e685dfc400aa8";
export const url=new URL("../icons/face_down-fill.svg?v=8da9c60e11f35d44d191ebdfd5e8d8372ca555b73bb4c2ef3478d0dbe44125bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
