export const name="info-thin";
export const id="dl_5a6127fa4b7c40e0b0fe";
export const url=new URL("../icons/info-thin.svg?v=da23351884236b702504cfb09c682c728139766c2318a862e4ea61b7790f191a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
