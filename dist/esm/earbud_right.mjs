export const name="earbud_right";
export const id="dl_317a2147bcfcaedb69e2";
export const url=new URL("../icons/earbud_right.svg?v=0b4801ac380a68ca59bdbb0d9127ad9ea2c50508585731bf080373b20f5a7d27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
