export const name="file-css";
export const id="dl_ff07bd427972437c8136";
export const url=new URL("../icons/file-css.svg?v=0d5e03dccd7cf19e39579eadf4b5cc13cee49238db45fccf8e17b5f29d826ca9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
