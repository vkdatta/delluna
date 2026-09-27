export const name="align-right-simple-duotone";
export const id="dl_e393c5018af44edfa6eb";
export const url=new URL("../icons/align-right-simple-duotone.svg?v=12b09a54747d0e2b56a6079a104f02f7849a8921b2d8832465b7f028d053ec31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
