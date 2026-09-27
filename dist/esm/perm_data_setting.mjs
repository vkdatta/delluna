export const name="perm_data_setting";
export const id="dl_70510aaf5c877fedccc8";
export const url=new URL("../icons/perm_data_setting.svg?v=b5634d3d88e1fb8c00e47bb474522fcb82e88d1bd54d85514d7b6113f47842a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
