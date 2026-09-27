export const name="lucid_2-fish";
export const id="dl_df323d16eeb24015bb75";
export const url=new URL("../icons/lucid_2-fish.svg?v=449e184412e359ff2772d475549321e04cbdb800f194b53435111ddc3afc946f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
