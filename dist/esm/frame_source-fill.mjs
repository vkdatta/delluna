export const name="frame_source-fill";
export const id="dl_5a444a4517ae49c1a0a4";
export const url=new URL("../icons/frame_source-fill.svg?v=552dd9381e67a4a43a5eb848bbad394d8cb617fe72a7f277ceae15b61940f99d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
