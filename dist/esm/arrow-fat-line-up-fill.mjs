export const name="arrow-fat-line-up-fill";
export const id="dl_920fb623dd7148e8a154";
export const url=new URL("../icons/arrow-fat-line-up-fill.svg?v=15bf7ecc0475a92a673dce67bf32dde7ae0125a3ac0896a9998feea702179907",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
