export const name="familiar_face_and_zone-fill";
export const id="dl_8eff30689e45988498e1";
export const url=new URL("../icons/familiar_face_and_zone-fill.svg?v=9319f7dd3465860188d132790af2365812ef7fbe13d5d513f266c3ec3281de69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
