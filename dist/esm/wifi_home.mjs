export const name="wifi_home";
export const id="dl_b8be387ee4582fde4f44";
export const url=new URL("../icons/wifi_home.svg?v=439eca357dae594039d7ad5d3e2213a167ea0d798b5c5ba8420895a3414a9c77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
