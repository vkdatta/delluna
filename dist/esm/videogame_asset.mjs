export const name="videogame_asset";
export const id="dl_887ca8c57e23e1d7a0d6";
export const url=new URL("../icons/videogame_asset.svg?v=c14555750469ecaa441426e4a89277c499162259486d80b12586f23b71fa1f16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
