export const name="lucid_3-phi";
export const id="dl_07f93d1ec2cf4922a2c9";
export const url=new URL("../icons/lucid_3-phi.svg?v=dce7d09406f9d0b77369cb9e9f3c90ad495b368299447850677a26e43830b51a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
