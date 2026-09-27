export const name="math-operations-fill";
export const id="dl_ab2250bdab8d4409b216";
export const url=new URL("../icons/math-operations-fill.svg?v=9d0e903dd2ea725ee631e88acc4221593b3b62971b7fb42775f5325f34604f4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
