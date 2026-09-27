export const name="local_hospital";
export const id="dl_acb8306075238ca3e000";
export const url=new URL("../icons/local_hospital.svg?v=7756e60256a01d82ac2e0c087a66bfa05149c1917f13dcb94576fb5a4bec17b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
