export const name="pinch_zoom_out-fill";
export const id="dl_ad491f31f8134cdeb769";
export const url=new URL("../icons/P/pinch_zoom_out-fill.svg?v=c6e6d115ae061815b96d7d3af22c0c6648dd7b6c4b90ec25f338fba4c3e48c92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
