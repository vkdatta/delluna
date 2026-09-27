export const name="lucid_2-dock";
export const id="dl_c3a28392f6c2418a9db8";
export const url=new URL("../icons/lucid_2-dock.svg?v=82a67d87f0e8473a1dd20ee48d128e839c50d3678ea0c9f2ffe25059a79a91c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
