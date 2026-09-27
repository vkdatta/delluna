export const name="change_history-fill";
export const id="dl_efd9d6fdcaaaa7c6dcee";
export const url=new URL("../icons/change_history-fill.svg?v=d618c8a1e7e299a18d42edfb9360b86650fe03edd93a131002f534da1d31e08c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
