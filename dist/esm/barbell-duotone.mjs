export const name="barbell-duotone";
export const id="dl_35e2a6c5c7b441809730";
export const url=new URL("../icons/barbell-duotone.svg?v=d443bc5f74d58fc5cf434a5a8dcad3411493e14063541430dafd6761328d97d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
