export const name="hash-bold";
export const id="dl_af95fa491c2149f5a20d";
export const url=new URL("../icons/hash-bold.svg?v=8d2cb5e39903004da3d0a85a919adc6c76adcd65b3c9c1e8e355d8cf6cdf7193",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
