export const name="wallet-minimal";
export const id="dl_0eb6d3ff5e264fd18a73";
export const url=new URL("../icons/wallet-minimal.svg?v=c2334fd86a463a834e00af9b91269f8144ad6d6372369841923983da67a11856",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
