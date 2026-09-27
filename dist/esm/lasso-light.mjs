export const name="lasso-light";
export const id="dl_cb62e8cabfe947dd9b0b";
export const url=new URL("../icons/lasso-light.svg?v=6b9c4b0cf8109ced2649b988cedcafbdd9938a0dfcdfa01c98db7c501e138d83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
