export const name="lucid_2-layers-plus";
export const id="dl_0d0c8ce8f1114c1cba47";
export const url=new URL("../icons/lucid_2-layers-plus.svg?v=897694d982387b4a3c8bee8add1006868be3fad94ee8e22bc2223db1cc59f4d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
