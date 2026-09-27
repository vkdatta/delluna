export const name="familiar_face_and_zone";
export const id="dl_e4a85770968a31d30d80";
export const url=new URL("../icons/familiar_face_and_zone.svg?v=e4b885836a7d3eb088c26645ab9a56c43178b3b54f51d68306133730403ed338",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
