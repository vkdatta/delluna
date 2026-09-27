export const name="marker-circle";
export const id="dl_97f0c86f8b87483a9a1b";
export const url=new URL("../icons/marker-circle.svg?v=6ae1e663c1c0c476a643fec10be0247a9c05db5bf112a323bfa8f9da4641ae48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
