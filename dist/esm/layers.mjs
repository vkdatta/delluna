export const name="layers";
export const id="dl_143752f9e1a99747e7ab";
export const url=new URL("../icons/layers.svg?v=0efd0b4a71e2c17e4b0f84e6c07b1d5e0e21d5b3143ee3584706da0363d59804",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
