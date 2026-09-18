export const name="remove_done-fill";
export const id="dl_8bcac309cf32448ba0e0";
export const url=new URL("../icons/remove_done-fill.svg?v=259e4a6405e750e08ccb270b12b5d5b0dd75621ae075ed8095a69ce54f44d276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
