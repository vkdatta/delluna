export const name="lucid_2-file-box";
export const id="dl_a0203b428a6948e39036";
export const url=new URL("../icons/lucid_2-file-box.svg?v=fbc61a2e122b11d02a9d5e848e5bac695255366011ac780349997ff547f84bc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
