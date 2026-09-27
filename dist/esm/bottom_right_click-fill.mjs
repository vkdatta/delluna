export const name="bottom_right_click-fill";
export const id="dl_295bf8024212242b65a7";
export const url=new URL("../icons/bottom_right_click-fill.svg?v=72684be29745fafa14f5fcf5880849444fe2a9bd6ec0fbabf78612ff5fdbd137",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
