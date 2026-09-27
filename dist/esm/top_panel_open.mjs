export const name="top_panel_open";
export const id="dl_dd049e4cc39d8c3424df";
export const url=new URL("../icons/top_panel_open.svg?v=28b74d1c314e9458d822d5193470a2b37d21ab3209de6689d1dc56c0e157b016",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
