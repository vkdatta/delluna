export const name="users-light";
export const id="dl_13bf185d2160d4f2a759";
export const url=new URL("../icons/users-light.svg?v=c7207ced94f5e276daf3f42e18eaecadc7ab05e8950858f1c9456349c18847aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
