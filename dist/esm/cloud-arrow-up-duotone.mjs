export const name="cloud-arrow-up-duotone";
export const id="dl_2d84c19ac0e64b58850c";
export const url=new URL("../icons/cloud-arrow-up-duotone.svg?v=879913d4808eeb75eb8b76fb342f132643d0a792f46d8e21f2f4b91b9ee13571",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
