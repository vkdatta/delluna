export const name="mood-fill";
export const id="dl_7f8b401a344bb6d8135d";
export const url=new URL("../icons/mood-fill.svg?v=cb83f05a40c660e6ff446837ceb44820ae01a823848b4fee46aa1de1fd7405cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
