export const name="lucid_3-scroll";
export const id="dl_77dff2f7b94e4051b4f6";
export const url=new URL("../icons/lucid_3-scroll.svg?v=a11f7aaea90ef78232e49bea46fc10e81ff240ef6db04988028f30720f6421ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
