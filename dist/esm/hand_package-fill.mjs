export const name="hand_package-fill";
export const id="dl_c437c790da25849e6f93";
export const url=new URL("../icons/hand_package-fill.svg?v=e71a19c944f4fac371ffa8dacfbc4bef280ebcb12aef7fdbd0240da2b0c5d4e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
