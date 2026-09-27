export const name="pen-fill";
export const id="dl_101127f5f890442eaacd";
export const url=new URL("../icons/pen-fill.svg?v=2cab123b8d7a8f478e02e56389a102a9f2667901f75661a5753c8ae8ea2f235e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
