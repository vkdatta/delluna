export const name="computer-tower";
export const id="dl_722f9c11227f4ddd9604";
export const url=new URL("../icons/computer-tower.svg?v=a10eeacb8cc5c8828b254f72101e40fe5f7ac86c51110e651ff464eef9245e54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
