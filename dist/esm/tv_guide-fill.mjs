export const name="tv_guide-fill";
export const id="dl_73ed8f9a1e5bf682cdb0";
export const url=new URL("../icons/tv_guide-fill.svg?v=cdf2b19de783563102d3ad2aee6a58b18d34456ffdb8de00ecf762426eef7567",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
