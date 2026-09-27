export const name="sneaker-bold";
export const id="dl_335f3e72694a74600a92";
export const url=new URL("../icons/sneaker-bold.svg?v=5fa0db9c41b2dd24ae52adeb8c35bd6eba0fd358d7e056291788e244035c3144",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
