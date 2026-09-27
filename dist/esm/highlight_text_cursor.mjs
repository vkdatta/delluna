export const name="highlight_text_cursor";
export const id="dl_205f28f6e5b5f221b539";
export const url=new URL("../icons/highlight_text_cursor.svg?v=4cb2e6f680afc0ad00c6b9c79cf7240c5091004b3e930fa8abf3cc00f0dbd0f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
