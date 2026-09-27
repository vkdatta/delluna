export const name="lucid_2-external-link";
export const id="dl_0ce48f8d80cb4e6b85b0";
export const url=new URL("../icons/lucid_2-external-link.svg?v=8812094c723216b5d344defc6f2eff288dcf293cc5ccdd744b9b1a569812ab7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
