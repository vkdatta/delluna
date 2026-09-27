export const name="crane-tower-duotone";
export const id="dl_79e8296ac0034443b321";
export const url=new URL("../icons/crane-tower-duotone.svg?v=f1709ae29cb6795929e228ccdd73a11360d7018ec90e1bf5b39fac25a3190297",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
