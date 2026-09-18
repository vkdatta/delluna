export const name="bento-fill";
export const id="dl_d495b9fef43040fdae8a";
export const url=new URL("../icons/bento-fill.svg?v=a22a1ba931c74133f314863418a4f945eff277d6d75c3ea579477ec5567a280b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
