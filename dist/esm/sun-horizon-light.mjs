export const name="sun-horizon-light";
export const id="dl_b87b8e05c9344a18a5af";
export const url=new URL("../icons/S/sun-horizon-light.svg?v=488e1a75f590766ed37314c1b0117d0ea03d151376f74a676870feacb97e42f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
