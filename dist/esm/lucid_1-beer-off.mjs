export const name="lucid_1-beer-off";
export const id="dl_28e10f9ef4f74d0791cc";
export const url=new URL("../icons/lucid_1-beer-off.svg?v=e9d64f4a9d4f009c6f6baef79578ce6f310036cbc0113def32586a053faf7311",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
