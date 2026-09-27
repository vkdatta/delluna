export const name="lucid_3-search-x";
export const id="dl_4a51b080be7549fab8a7";
export const url=new URL("../icons/lucid_3-search-x.svg?v=fd316dd883c423579a003004d2803b542f0c2da2aac03b59a40ddcf7c6faf3b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
