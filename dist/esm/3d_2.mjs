export const name="3d_2";
export const id="dl_bb6dae4a63584cc6becd";
export const url=new URL("../icons/3/3d_2.svg?v=85d9c7f4bca565b9742770c0987eb60954c2e46cf9d236895d43543b1d672fa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
