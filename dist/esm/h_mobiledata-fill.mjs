export const name="h_mobiledata-fill";
export const id="dl_c17374e67299cba34749";
export const url=new URL("../icons/h_mobiledata-fill.svg?v=575df77f51e21b79308545db7a8ab52669244db4b892923e8fb0f194347a82bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
