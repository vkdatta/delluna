export const name="arrow_circle_right";
export const id="dl_f2fca94e89a750690773";
export const url=new URL("../icons/arrow_circle_right.svg?v=0dcdc98c6f4ac5181f4d13dd5efcf627a614cf2b52013e5e52a81ab536bff537",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
