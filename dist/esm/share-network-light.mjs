export const name="share-network-light";
export const id="dl_cb8dfab29d672e5d0116";
export const url=new URL("../icons/share-network-light.svg?v=5022b2c1ab15e00ffb5a0e00570ae8bfb1184247659233aba5df7985de812941",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
