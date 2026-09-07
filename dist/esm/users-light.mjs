export const name="users-light";
export const id="dl_b5b6de3109ae415092d0";
export const url=new URL("../icons/U/users-light.svg?v=c7207ced94f5e276daf3f42e18eaecadc7ab05e8950858f1c9456349c18847aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
