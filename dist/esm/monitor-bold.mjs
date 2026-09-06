export const name="monitor-bold";
export const id="dl_1fa638da174547d7bbce";
export const url=new URL("../icons/monitor-bold.svg?v=321df16741f8848f6af13dc3c0ec2328028364fd67f941c31fe8669760efff7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
