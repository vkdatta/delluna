export const name="line_weight";
export const id="dl_d9b7c932317f2f56d4e5";
export const url=new URL("../icons/line_weight.svg?v=f431def13cc5f1f946a50ee2ea4ad210614def74ae76b6792a2b9687c2a565fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
