export const name="fire-extinguisher-bold";
export const id="dl_632caf699e134577b6be";
export const url=new URL("../icons/fire-extinguisher-bold.svg?v=e28051cdc5806a3152322ee1f83ddb1ceb64abd62d571b1ae0477846121a0681",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
