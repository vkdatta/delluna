export const name="crane-tower-fill";
export const id="dl_88f46821e4d7451586d4";
export const url=new URL("../icons/crane-tower-fill.svg?v=82ac2ee82514e75a732a522d09d231ff742326764c32c73716d519ffc32837d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
