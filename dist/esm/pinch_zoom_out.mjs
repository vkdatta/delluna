export const name="pinch_zoom_out";
export const id="dl_a8473e8c5cca45e8a653";
export const url=new URL("../icons/P/pinch_zoom_out.svg?v=447ed76af604052171079734de3049b2e1e5709d52c56cb5e85c524276e527eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
