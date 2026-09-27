export const name="humidity_mid";
export const id="dl_092b8f203d8ba2d27b06";
export const url=new URL("../icons/humidity_mid.svg?v=0bd352726d894e8cef1bc630eadbe8cd68de2a13b4976c49f60490ada9a49f65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
