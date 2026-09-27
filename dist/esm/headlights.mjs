export const name="headlights";
export const id="dl_8db3ffee892b49bda48a";
export const url=new URL("../icons/headlights.svg?v=bb0ed843bd961946ba88f037a1cdbda67f961cb31f419ca92719487a75f79583",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
