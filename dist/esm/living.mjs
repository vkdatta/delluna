export const name="living";
export const id="dl_a18c38f2bcae12da67a0";
export const url=new URL("../icons/living.svg?v=2d3c546c4ffff88d6e83132f6ff0ccdcd7001940700ec2223c0285ff83c4bf5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
