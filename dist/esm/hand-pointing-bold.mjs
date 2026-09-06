export const name="hand-pointing-bold";
export const id="dl_d156df854c6f409ab18c";
export const url=new URL("../icons/hand-pointing-bold.svg?v=185f4987cf4edb8bf13187caa8f68e9fe351f3149ddee29fd8f386f5bb7186b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
