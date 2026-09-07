export const name="wine-bold";
export const id="dl_0360a2376a424814a04d";
export const url=new URL("../icons/W/wine-bold.svg?v=fd69a486639e082d7304ba8e365850f22ea782f42920141cc3af9f766ab1f0a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
