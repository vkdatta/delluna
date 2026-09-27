export const name="1x_mobiledata";
export const id="dl_c9a10c4cbd8988befaa5";
export const url=new URL("../icons/1x_mobiledata.svg?v=c42e69c5843d410df02e5345de0918dc3e3d0265c800e1337f56876576d3927f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
