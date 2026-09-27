export const name="crane-tower-fill";
export const id="dl_88f46821e4d7451586d4";
export const url=new URL("../icons/crane-tower-fill.svg?v=6c64964a8890f0b381be884b2d1430cb43f305f4b77f9fe575cc1bffd9d10ef3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
