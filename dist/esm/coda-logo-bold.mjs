export const name="coda-logo-bold";
export const id="dl_4cad800a18134fd4a5f2";
export const url=new URL("../icons/coda-logo-bold.svg?v=897024d3511a7e2649ac66115de7029d469c06cc767f089a1f2a9a6a7371be16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
