export const name="add_row_below-fill";
export const id="dl_3db5d9e3f35526beef5c";
export const url=new URL("../icons/add_row_below-fill.svg?v=8ba115bcf900d0a23187bb800905c3a94fd40eec30ed8c00cc59139929fbea09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
