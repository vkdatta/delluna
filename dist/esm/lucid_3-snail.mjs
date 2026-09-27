export const name="lucid_3-snail";
export const id="dl_610da9e5ebd744f08340";
export const url=new URL("../icons/lucid_3-snail.svg?v=73fff3fb0194488f698b1916483b28df64fb9a086d78fce91dc8d89b8cacad1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
