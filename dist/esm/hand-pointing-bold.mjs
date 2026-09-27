export const name="hand-pointing-bold";
export const id="dl_d156df854c6f409ab18c";
export const url=new URL("../icons/hand-pointing-bold.svg?v=fede0249dbd6646f4eb1d668ce0cee7119c07c0d7d678f342d4a9d1b7b27995c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
