export const name="history-fill";
export const id="dl_cacf0a3d2946e1d49d01";
export const url=new URL("../icons/history-fill.svg?v=e68cc3ab7bd199c05bddba3b65d1ef3672ac259417f9ea621c2ea93c683703f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
