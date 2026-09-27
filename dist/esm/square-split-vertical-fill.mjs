export const name="square-split-vertical-fill";
export const id="dl_7e48d87756e46196481c";
export const url=new URL("../icons/square-split-vertical-fill.svg?v=37ef4dc6ddf6d398bf1d50465db1132a0bf7b48bbc3a783208aadcd0a8099c04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
