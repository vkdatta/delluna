export const name="keyhole-fill";
export const id="dl_1f2f43ce9fc8448daa08";
export const url=new URL("../icons/keyhole-fill.svg?v=a74747142d3f29900cbf7c4c56e40545a0f23551ebee877861823bdb46a0188c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
