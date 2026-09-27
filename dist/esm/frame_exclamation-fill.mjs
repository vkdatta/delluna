export const name="frame_exclamation-fill";
export const id="dl_42c950d5365b7425d59a";
export const url=new URL("../icons/frame_exclamation-fill.svg?v=7eb5cc73dca28720b4eb549ec7ea916f6f52ba8f8b7c1dc204948d3de24661d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
