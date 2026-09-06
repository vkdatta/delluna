export const name="lucid_3-snail";
export const id="dl_610da9e5ebd744f08340";
export const url=new URL("../icons/lucid_3-snail.svg?v=bee407f08100273ae2e7d2775e12b521cf2c8a0297e496f72e4f268fb905b33c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
