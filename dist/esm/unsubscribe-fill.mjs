export const name="unsubscribe-fill";
export const id="dl_5757e5923d73133e8899";
export const url=new URL("../icons/unsubscribe-fill.svg?v=54cc7a95eb347aaee682b763aff205c8664d4f026deea70bb9d136fa93ce442c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
