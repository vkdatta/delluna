export const name="garage";
export const id="dl_d4e4dbb509384d26a709";
export const url=new URL("../icons/garage.svg?v=a8f431b24084cf33e89277cbdc9e1a5cad2840d2ee6ba237f3ac40d64ac2589e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
