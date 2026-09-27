export const name="folder_check_2";
export const id="dl_4c05b45efce2ea96f0eb";
export const url=new URL("../icons/folder_check_2.svg?v=a6763a0d875b669855a04c6f8abecfe6522d766d3f52f534f3439acba02c0195",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
