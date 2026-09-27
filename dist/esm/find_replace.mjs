export const name="find_replace";
export const id="dl_ace5ef530124ca2babca";
export const url=new URL("../icons/find_replace.svg?v=b5996632a31ffb04ee3cbbb282cad438b5277139be39a4b227fd5ee496f2717d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
