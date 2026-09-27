export const name="shower-bold";
export const id="dl_a79d51949f407e1c67e3";
export const url=new URL("../icons/shower-bold.svg?v=7c358cb301771e16281024d76649cf9dbc18f858a5dbf0db44530ce59ca8b431",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
