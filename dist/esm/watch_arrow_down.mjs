export const name="watch_arrow_down";
export const id="dl_a4b05184c806775c33c9";
export const url=new URL("../icons/watch_arrow_down.svg?v=fd9122dd8e40ec9bb55549aed1907d45e8c0392c356922828795fd7721bc0d26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
