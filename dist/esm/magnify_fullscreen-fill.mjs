export const name="magnify_fullscreen-fill";
export const id="dl_b9c7009eae26d2238555";
export const url=new URL("../icons/magnify_fullscreen-fill.svg?v=1645a06f73cf3d684eaa372e9b66e8039f262f45bfc0de1831e48bd9029f3cce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
