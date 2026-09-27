export const name="lighthouse-bold";
export const id="dl_7af28b749027488fa6f8";
export const url=new URL("../icons/lighthouse-bold.svg?v=f61efeea56c1bbe0941b8f1f3b6601eb477e53c6ae366daa75fd1eeb41421713",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
