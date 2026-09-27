export const name="conditions-fill";
export const id="dl_3ce800b8dd8412402be3";
export const url=new URL("../icons/conditions-fill.svg?v=fcc894d85744547ed59dfc61cc2d5dd6df88d0afaddf339282c21e9e860dab38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
