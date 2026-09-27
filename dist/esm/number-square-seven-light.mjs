export const name="number-square-seven-light";
export const id="dl_d70f281bfffd46809c3f";
export const url=new URL("../icons/number-square-seven-light.svg?v=9cbb1086e90815d925c62de28e8a87efa9a3488e22cb5c8c24c3d31f52ef09b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
