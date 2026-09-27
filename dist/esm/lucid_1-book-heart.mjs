export const name="lucid_1-book-heart";
export const id="dl_094b8d1b76ff4218881c";
export const url=new URL("../icons/lucid_1-book-heart.svg?v=9389f367b9d767ce048560be434e22420fc88266336d5514fb857d3bc1846c00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
