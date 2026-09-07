export const name="frame-corners-fill";
export const id="dl_c724beb6edb5455484e1";
export const url=new URL("../icons/frame-corners-fill.svg?v=33896f65db543919b48a3a20bb17eacd7747e877af026d49c82da28e5c9fdeb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
