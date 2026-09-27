export const name="user-minus";
export const id="dl_de5d43e2d394ea8ad48f";
export const url=new URL("../icons/user-minus.svg?v=1fa1477362d1f6c5f19727c1007ddcda17ab5d18289ec2ff560164ca2fb35734",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
