export const name="target-fill";
export const id="dl_d924b1fb08337e4742c6";
export const url=new URL("../icons/target-fill.svg?v=d8e44692621382570758c3071080c4da1e9bfc774cd601293dbd61872f58c378",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
