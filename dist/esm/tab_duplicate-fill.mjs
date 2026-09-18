export const name="tab_duplicate-fill";
export const id="dl_77911f77583e404cb6f2";
export const url=new URL("../icons/tab_duplicate-fill.svg?v=1c9041d5902be4247676d7251f28ac334d79287fc63a9fe7006aa2627f7ce82e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
