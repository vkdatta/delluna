export const name="flying-saucer-light";
export const id="dl_56b223a73a3d471f8c37";
export const url=new URL("../icons/flying-saucer-light.svg?v=d98b6acd3145cd4aebf8c207a771fcb89e543d95b38b3e4cfd5c2df1a62bb7c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
