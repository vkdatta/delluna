export const name="traffic-fill";
export const id="dl_f464de8497b70ef59c9a";
export const url=new URL("../icons/traffic-fill.svg?v=5d40a5758dc75b4ef9a9067627382dbf4dad20fa7ec7f4fa971be4ae51534c69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
