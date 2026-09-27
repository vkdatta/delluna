export const name="lucid_1-contact";
export const id="dl_cf20d49fffc44176a053";
export const url=new URL("../icons/lucid_1-contact.svg?v=c6693a625b7f3505852d31c8787eb4c3f95a3d70a301b06cd03a728114699c70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
