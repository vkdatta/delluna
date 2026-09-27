export const name="face-mask-bold";
export const id="dl_44097ed78571469ba883";
export const url=new URL("../icons/face-mask-bold.svg?v=d667fbba478c2f14911083cb5a5e83a6a99dfe8742d48d23a814852f07719be0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
