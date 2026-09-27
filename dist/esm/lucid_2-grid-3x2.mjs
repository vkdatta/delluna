export const name="lucid_2-grid-3x2";
export const id="dl_fc74f1ed62ab444da7cb";
export const url=new URL("../icons/lucid_2-grid-3x2.svg?v=a72a5de148c414ed64e1b113782bfac94066367bde212d68485a8aff6ff406bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
