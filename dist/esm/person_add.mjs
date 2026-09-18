export const name="person_add";
export const id="dl_3ba455c91e3e4d6c985e";
export const url=new URL("../icons/person_add.svg?v=bbca1648d3f0fe8f4f81ac0d98a39fba9e90df8bdc04a32ff9f105ff2ac34b2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
