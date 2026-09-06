export const name="lucid_3-phi";
export const id="dl_07f93d1ec2cf4922a2c9";
export const url=new URL("../icons/lucid_3-phi.svg?v=11bc3afc464e422fdc55da77e26de11954ddfa85c0bdab954497ba3f8b400df5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
