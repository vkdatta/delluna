export const name="b_circle";
export const id="dl_f7b7abfa9352120e6b80";
export const url=new URL("../icons/b_circle.svg?v=2b28789380a39dfe9b027dbd79a2b149dc1af40f67af661c63489a64550ff0be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
