export const name="square-half";
export const id="dl_a69638ec3ec1920b52bc";
export const url=new URL("../icons/square-half.svg?v=16fe729dc85f1e672c675bb35efaa5ab0bb7759f35bfe36032fa3840b27d1c5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
