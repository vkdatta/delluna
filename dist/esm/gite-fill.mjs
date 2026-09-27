export const name="gite-fill";
export const id="dl_cb9bb07ea2a99853c958";
export const url=new URL("../icons/gite-fill.svg?v=70ae4dab92a24ecb147de7929966afa212481267ef15477ea7ade4630d1d42f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
