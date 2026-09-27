export const name="lock-duotone";
export const id="dl_3b03d22f5a1e4b209e8b";
export const url=new URL("../icons/lock-duotone.svg?v=7b30eaa7b711e13f32c015d1a1d39ea463a8416c7ce3535a151f59720b77faec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
