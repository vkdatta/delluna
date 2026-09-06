export const name="rainbow-cloud-bold";
export const id="dl_a16ae6bbb0a9450f9a3e";
export const url=new URL("../icons/rainbow-cloud-bold.svg?v=4e182fefd4459970ddaf7b72fa3715bedfc94eb43d48b2aae86f68173e2151c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
