export const name="medal-military";
export const id="dl_211b4f001fde4e2da0d7";
export const url=new URL("../icons/medal-military.svg?v=f093480525d217ecc918d930ab11c24c479555115c3c71d84f242e5cd8551f88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
