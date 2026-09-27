export const name="folder-simple-minus-fill";
export const id="dl_e7ccba98752a4cbb8200";
export const url=new URL("../icons/folder-simple-minus-fill.svg?v=b22159b62cff138d97afd54f12d91ef8997dc5d6359c951e93fe7646fc9e117b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
