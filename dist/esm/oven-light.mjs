export const name="oven-light";
export const id="dl_e5853752a2a04712b9c0";
export const url=new URL("../icons/oven-light.svg?v=624bd58ba9b60af305af98350b7ed92affe283f083356e04a9c081454a5d1918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
