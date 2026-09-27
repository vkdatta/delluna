export const name="comic_bubble";
export const id="dl_90305e4ae900fb15db4a";
export const url=new URL("../icons/comic_bubble.svg?v=6158d453209fc8d560ec3089e302202427404099e137297a2c8520be323294e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
