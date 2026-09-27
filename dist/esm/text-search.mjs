export const name="text-search";
export const id="dl_cee180a80e3b40b693b4";
export const url=new URL("../icons/text-search.svg?v=334d7bf6a8c4881579f91742a2898ebd8a238b35ffbfa2fb12d1c12732e62a3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
