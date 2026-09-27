export const name="chef_hat-fill";
export const id="dl_b068048a3d412f9ad212";
export const url=new URL("../icons/chef_hat-fill.svg?v=4c70421a0402ab20c4fd231ff0de608655ba0fc20c945fd2eec713965ce54a7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
