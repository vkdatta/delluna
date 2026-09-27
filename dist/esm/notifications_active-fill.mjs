export const name="notifications_active-fill";
export const id="dl_0832fec9e76b4fabc2a7";
export const url=new URL("../icons/notifications_active-fill.svg?v=ea6259ddcb572ac102812fbaa4bdd218744475430115b79d3261a13d86a6df59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
