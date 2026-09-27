export const name="view_stream-fill";
export const id="dl_0b0074c386d9d48a6866";
export const url=new URL("../icons/view_stream-fill.svg?v=0eecfd0cd36b02f94df5305d45ce9c5b952d168f910340190b5387bc403b27d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
