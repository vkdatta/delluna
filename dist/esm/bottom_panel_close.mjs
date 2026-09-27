export const name="bottom_panel_close";
export const id="dl_a3ae385cd7fa1c763415";
export const url=new URL("../icons/bottom_panel_close.svg?v=db7c2fc61e8a2dd973686b72666c8e0f0e6e6489a0fca3cc9a30ee6cc96ebe42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
