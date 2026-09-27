export const name="immunology";
export const id="dl_697cc9d762d8800ddae0";
export const url=new URL("../icons/immunology.svg?v=ec207805cf26e19f2ea2a5d19255d22a4eceeb5c7158c365edbe2fbaaf689cbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
