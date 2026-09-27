export const name="3p";
export const id="dl_8695ce26e177bfb454ff";
export const url=new URL("../icons/3p.svg?v=8cee501ccf53d1ce0078d92f51b81d61a7ad1f992fdaa8a438389061d528ff37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
