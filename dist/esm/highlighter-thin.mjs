export const name="highlighter-thin";
export const id="dl_f91fe8b2f2454e519496";
export const url=new URL("../icons/highlighter-thin.svg?v=3ccf75f1450d67055dfedf5c5713719a6d370617b841c56748fda81fb2c3c4a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
