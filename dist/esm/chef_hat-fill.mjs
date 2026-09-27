export const name="chef_hat-fill";
export const id="dl_3995a5166116a560bdf1";
export const url=new URL("../icons/chef_hat-fill.svg?v=cfc08392405174f89f09978667bbb82857051fc2012a3a790bd7d599d279ee3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
