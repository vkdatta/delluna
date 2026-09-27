export const name="pinwheel";
export const id="dl_579617bd44e94697bb73";
export const url=new URL("../icons/pinwheel.svg?v=27f16b9c4db99ee92483cee758584a3d5b9eafabc89c057cf437396d2f588b4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
