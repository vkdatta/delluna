export const name="face_2";
export const id="dl_dafeedbcee465795224c";
export const url=new URL("../icons/face_2.svg?v=7cefbf5039e646796e3829269c4866df7738b74d0332e4facd6338d0338e8b83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
