export const name="vignette-fill";
export const id="dl_c3388c60a8b601d07237";
export const url=new URL("../icons/vignette-fill.svg?v=d3fb2c0e62fc960599f7b10eae8b45a506c117bdac30ae3956dddaced50715b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
