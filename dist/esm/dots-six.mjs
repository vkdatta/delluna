export const name="dots-six";
export const id="dl_f85631cec26d452bbe75";
export const url=new URL("../icons/dots-six.svg?v=98d4801caca44a0be87d8aa5c63d3c31834047e5c0a862d7d751f33266332bbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
