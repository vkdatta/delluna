export const name="zoom_out-fill";
export const id="dl_954b74f5d6ee1121a601";
export const url=new URL("../icons/zoom_out-fill.svg?v=46615b7f4d3ec74a690051b771f77ba66152638ac13304c2a1d112e5212d47c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
