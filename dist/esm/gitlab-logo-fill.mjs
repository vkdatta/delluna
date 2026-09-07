export const name="gitlab-logo-fill";
export const id="dl_20505d95c5ee46f78339";
export const url=new URL("../icons/gitlab-logo-fill.svg?v=009d469b1ea034d48e0fde7a95baa8acf98916246142277db1bdb89cfaff2380",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
