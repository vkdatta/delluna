export const name="gif_box";
export const id="dl_44a8b43f9f8d4f24a88a";
export const url=new URL("../icons/G/gif_box.svg?v=f735fd0efd0821a49cc1b29d3ec6d95bc6a38367ec4807ef4e74d8ab4911e393",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
