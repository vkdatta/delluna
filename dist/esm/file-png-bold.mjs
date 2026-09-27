export const name="file-png-bold";
export const id="dl_c5f732e103dd4185ba7a";
export const url=new URL("../icons/file-png-bold.svg?v=7a3a86da18a295c28c8cf55c69ae3b2c6a6ef66360d77544d3bad1020f6dd35d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
