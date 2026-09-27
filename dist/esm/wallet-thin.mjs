export const name="wallet-thin";
export const id="dl_f07feab242e273624875";
export const url=new URL("../icons/wallet-thin.svg?v=dd46fa6de4f9e5b57340e64ea9ce341d88a61f88dd758713d95178535971b27a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
