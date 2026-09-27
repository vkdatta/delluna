export const name="flag-banner-fold-bold";
export const id="dl_5b29bdcc9bfe4eb5a338";
export const url=new URL("../icons/flag-banner-fold-bold.svg?v=afac52a5254b118f864cff17280125522c6b678ae4c3ff8fd4e23dbe766304ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
