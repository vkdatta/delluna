export const name="gradient-bold";
export const id="dl_dd44df090f504e09a8ea";
export const url=new URL("../icons/gradient-bold.svg?v=50ea44ffaf2dfcd4c2cc221c11a021b108c1024c5dd74a212572549dc5526e3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
