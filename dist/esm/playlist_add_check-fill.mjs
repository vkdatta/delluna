export const name="playlist_add_check-fill";
export const id="dl_a84fac4a32be4fada9cf";
export const url=new URL("../icons/P/playlist_add_check-fill.svg?v=10ae3cd02d872d2a0b04b67214e870ed63f5d95b2ac025796da2ec7192efdebb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
