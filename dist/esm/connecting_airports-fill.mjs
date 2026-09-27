export const name="connecting_airports-fill";
export const id="dl_2aa50331252fb8a721d0";
export const url=new URL("../icons/connecting_airports-fill.svg?v=2ad107e2821bcb7026d64845d38f710738436a757c964a72363aa85656c28b32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
