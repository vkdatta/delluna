export const name="badge";
export const id="dl_825e03ef439b9a45eab5";
export const url=new URL("../icons/badge.svg?v=9c3c39dd164d4514d582ce7ae437935ebc201c7b06351122ac9d894824408030",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
