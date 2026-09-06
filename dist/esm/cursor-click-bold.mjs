export const name="cursor-click-bold";
export const id="dl_9956ee124b7c42fcaebc";
export const url=new URL("../icons/cursor-click-bold.svg?v=beef2cc0770e39e4c39ba62f776d43148947780b8e1ea4dbe6161f9ac0f1e723",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
