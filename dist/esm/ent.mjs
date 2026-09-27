export const name="ent";
export const id="dl_9cb0e44416702231376b";
export const url=new URL("../icons/ent.svg?v=ae007cae7a53c8e1639067d57d15894511d6fa914deefa52810df0cbf8a7bb56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
