export const name="battery-vertical-high-bold";
export const id="dl_c072bf757dcb481c9e0d";
export const url=new URL("../icons/battery-vertical-high-bold.svg?v=960d3c44bd4f6c6c81867240c845168550870cad0052efdb59ceb0dd7f23e9fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
