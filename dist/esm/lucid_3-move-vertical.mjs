export const name="lucid_3-move-vertical";
export const id="dl_2b6e78926ee7493ebe6f";
export const url=new URL("../icons/lucid_3-move-vertical.svg?v=faaf251b44d1bda602f134f0caf81f32990e1208915c439b6473521d0d285e8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
