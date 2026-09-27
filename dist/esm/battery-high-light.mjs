export const name="battery-high-light";
export const id="dl_478355b9f496425898e4";
export const url=new URL("../icons/battery-high-light.svg?v=63d30db84eaae1a865ee2ed4139f70e04ec5c8518ba77786a3f30a3db30f4413",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
