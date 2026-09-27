export const name="earbud_left";
export const id="dl_3f806f508f53275c0875";
export const url=new URL("../icons/earbud_left.svg?v=055e807eb5c9ca972dd1741ddc18efdc5f77d4da88a934439ea1189331bc9a9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
