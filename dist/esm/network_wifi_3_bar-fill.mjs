export const name="network_wifi_3_bar-fill";
export const id="dl_b8a0edd6635d18945719";
export const url=new URL("../icons/network_wifi_3_bar-fill.svg?v=4300c3dfb5c2f6fd2734c5a0a41dc40638259037b7345cb82ae42a6e65851ecb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
