export const name="gif";
export const id="dl_8f173b1e3b2445a2b635";
export const url=new URL("../icons/gif.svg?v=f23c480d86049e4ae2b44b85680669858662531b6ac995d954a88976dc223576",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
