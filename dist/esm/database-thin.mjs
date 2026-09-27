export const name="database-thin";
export const id="dl_ab96be55331342eba1a4";
export const url=new URL("../icons/database-thin.svg?v=da1da6423694c04520bf3cbd1e41ce609d0811eb91fd7ab9b07de975235251d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
