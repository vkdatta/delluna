export const name="notion-logo-light";
export const id="dl_9b188cbf5375400fa2b1";
export const url=new URL("../icons/notion-logo-light.svg?v=8a919cd7d645e351c24fb19c93d54257f34f22500a986de52478ff0dcb0a7bec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
