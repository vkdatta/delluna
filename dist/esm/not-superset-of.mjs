export const name="not-superset-of";
export const id="dl_3264b29c072a4be2b498";
export const url=new URL("../icons/not-superset-of.svg?v=2f874346d5fe86f7c5eaf6d1764561673a01b5ea9985fe77e7290ada94d5f5fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
