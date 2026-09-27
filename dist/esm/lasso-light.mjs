export const name="lasso-light";
export const id="dl_cb62e8cabfe947dd9b0b";
export const url=new URL("../icons/lasso-light.svg?v=d049ba820234258954879c2f2ca6ea6b63b181a41e381aa2e1d517c5171204c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
