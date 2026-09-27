export const name="wc-fill";
export const id="dl_c1fec10bdf6b57071bcf";
export const url=new URL("../icons/wc-fill.svg?v=41f283de552c9abbaf1d63d7a482c1d7ad9918c59c9a4f71040eb98237e52aa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
