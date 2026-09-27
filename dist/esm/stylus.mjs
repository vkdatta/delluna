export const name="stylus";
export const id="dl_f4dae531addabb43902c";
export const url=new URL("../icons/stylus.svg?v=f276298e984d99009963c5c45dc6bfb5724701ea07da9d09f944b47b90c74187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
