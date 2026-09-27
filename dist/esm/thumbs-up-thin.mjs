export const name="thumbs-up-thin";
export const id="dl_69498944a0c9fb46dea4";
export const url=new URL("../icons/thumbs-up-thin.svg?v=60816440f35dc85680a3cd9f8ca49dfd63b1913af5d7c161b11bd19ca365c06b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
