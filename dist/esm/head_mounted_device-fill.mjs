export const name="head_mounted_device-fill";
export const id="dl_a95de1f358d6c0d38965";
export const url=new URL("../icons/head_mounted_device-fill.svg?v=4505367c819b837e32b7087c36a8b99dfeb2c41b04a7e8d3bc24044d89832911",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
