export const name="church-fill";
export const id="dl_17ab3816ef7e37470413";
export const url=new URL("../icons/church-fill.svg?v=159233978dcb46508bdffa92b50289123a92f0a56a1778f7c4a068e1a41f1787",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
