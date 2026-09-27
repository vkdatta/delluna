export const name="mask-sad-light";
export const id="dl_edfcc3d7460e438fa6bb";
export const url=new URL("../icons/mask-sad-light.svg?v=5b35f7062b1358237d43c4f50478f809f335f943cc399f2865141c6c249eb7df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
