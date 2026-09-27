export const name="touch_triple-fill";
export const id="dl_95e138d59315e7063d80";
export const url=new URL("../icons/touch_triple-fill.svg?v=77829c216441597127bf1a777b531627bf0c89d97e54cabb32dcc65a0cdd299b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
