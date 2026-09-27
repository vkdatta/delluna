export const name="visibility";
export const id="dl_e0e802b66835ee671577";
export const url=new URL("../icons/visibility.svg?v=1ebc8ffef479000b511d88dfcb4b362e65df67d7786265ade1c1d735d00ce8ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
