export const name="layers_clear-fill";
export const id="dl_85bc5fc7384a5bd3b64e";
export const url=new URL("../icons/layers_clear-fill.svg?v=9a06acf5d50151a4377be4437a078951b7902141c127cf40e6b5c21bb993cb4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
