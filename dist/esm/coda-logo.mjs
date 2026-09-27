export const name="coda-logo";
export const id="dl_72094a64e1fe454386cf";
export const url=new URL("../icons/coda-logo.svg?v=604986e61a27ae22e7269a959a33677590c49af121566f5bb6edcdc6c98d32d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
