export const name="meta-logo-duotone";
export const id="dl_bdf0cdf0700f403895a9";
export const url=new URL("../icons/meta-logo-duotone.svg?v=dd208c4037ffc573fb58da997512a6709dff560fe73af6c2909fe92e9cc0e3ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
