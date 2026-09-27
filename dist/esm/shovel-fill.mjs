export const name="shovel-fill";
export const id="dl_cacce012fc18d218b6b4";
export const url=new URL("../icons/shovel-fill.svg?v=e1c44ee9788364305b6596e96243a44b376340f35b2030a4b77b4234ecee18a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
