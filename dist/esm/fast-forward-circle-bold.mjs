export const name="fast-forward-circle-bold";
export const id="dl_f374586147a04fe7be17";
export const url=new URL("../icons/fast-forward-circle-bold.svg?v=d88b13d200984d67ccc3fd6ebc99076ad9857f8d3e317c342bb336d17868597f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
