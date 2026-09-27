export const name="add_moderator-fill";
export const id="dl_8cd0643976debfc03b59";
export const url=new URL("../icons/add_moderator-fill.svg?v=495b8d4812c67d94fbaecc62669e50e53cb6f2f4d7618ae74ceeba3523af49f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
