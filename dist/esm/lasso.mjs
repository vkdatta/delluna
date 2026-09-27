export const name="lasso";
export const id="dl_faa967a5e0ae42f6ba9c";
export const url=new URL("../icons/lasso.svg?v=eab65f9e53999cdab8d36096b82f722c45893d58d78e2a4d589762cee3469815",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
