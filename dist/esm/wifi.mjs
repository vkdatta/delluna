export const name="wifi";
export const id="dl_caffdfa6845244e6b086";
export const url=new URL("../icons/wifi.svg?v=7890e43d29a452c673567802930cb64393cdf8e4e735e8a6cb6d6f2d62c2c9a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
