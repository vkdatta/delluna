export const name="passport";
export const id="dl_a85a7d2ce72260771c2f";
export const url=new URL("../icons/passport.svg?v=3b7326fe93d5af6ec95e6a344c7aa646873c04f790675efa55c590b0ad521dc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
