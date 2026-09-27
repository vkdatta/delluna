export const name="lastfm-logo-bold";
export const id="dl_99829e5a865d491f932b";
export const url=new URL("../icons/lastfm-logo-bold.svg?v=7449c2d8afcb813de7da3dd68b26ce6d43046096ad27d28da66e52f20532e62d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
