export const name="euro-fill";
export const id="dl_fb10c7421fd64c4ce1ab";
export const url=new URL("../icons/euro-fill.svg?v=8cf9a8d92e3169df6768d11e8eccf0b778afe3be0dcbd60afc25e6503d036006",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
