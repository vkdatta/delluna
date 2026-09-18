export const name="scale-fill";
export const id="dl_ada2554422a24d1ba10e";
export const url=new URL("../icons/S/scale-fill.svg?v=b57adb76b4a1a19044509aea506f3cd57fd84640df17ac5e020deaa46e1081bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
