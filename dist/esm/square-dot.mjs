export const name="square-dot";
export const id="dl_7860a82d76de4c30963a";
export const url=new URL("../icons/square-dot.svg?v=852cecc8bc80e769e7159aa71b90e73cd09313b1843da03c7d7c8b2850a4ac49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
