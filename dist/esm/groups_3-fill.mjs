export const name="groups_3-fill";
export const id="dl_c349f0f1380a76b7da70";
export const url=new URL("../icons/groups_3-fill.svg?v=9a4ed4a0d49c05835bd7a5d02fbea8a45a3b734ed4de51d2207f397e67c15f0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
