export const name="dots-three-circle-vertical-fill";
export const id="dl_c5bbe10efcb340b9ab4a";
export const url=new URL("../icons/dots-three-circle-vertical-fill.svg?v=b96f11978535e6699897c7a9fe7986481a91485f1631611dd88a833a5a22b871",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
