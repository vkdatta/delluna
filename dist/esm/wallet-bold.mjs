export const name="wallet-bold";
export const id="dl_961c96087fc968cf1e4a";
export const url=new URL("../icons/wallet-bold.svg?v=76eea2a29d9f900862182944795ea4477a0191014130218a343087af4a3febf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
