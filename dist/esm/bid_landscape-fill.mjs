export const name="bid_landscape-fill";
export const id="dl_0351381fd9954470807e";
export const url=new URL("../icons/bid_landscape-fill.svg?v=4eba3c7eab064b1c19d4a0125a49eb381af8f879e270158c63e25bf68a37698c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
