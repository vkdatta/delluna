export const name="hd-fill";
export const id="dl_6bb4d581be1d0ddff562";
export const url=new URL("../icons/hd-fill.svg?v=1ce2680620de489b0eb9ead19b963db9ed76ffc24da2a33d0833e168a18f59d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
