export const name="folder_managed-fill";
export const id="dl_5e26243c7b6c956562f0";
export const url=new URL("../icons/folder_managed-fill.svg?v=b57603ab786dc37fc4cae89bf995167bbbe2eb996ae3b94f6e02cc32532ead9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
