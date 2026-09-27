export const name="body_system";
export const id="dl_52a73c1618ec82520fb9";
export const url=new URL("../icons/body_system.svg?v=6de0fb137b60bfd3db07e478eee7784366c5246aea926986bb8a462994c25abd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
