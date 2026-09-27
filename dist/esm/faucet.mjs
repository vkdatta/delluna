export const name="faucet";
export const id="dl_bbdb98c3a48dcaeeecd5";
export const url=new URL("../icons/faucet.svg?v=25d6e5cc433749e80944ad3bb1e9cb6c77dcf35d19f495af9c0078c885e39571",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
