export const name="drag_indicator";
export const id="dl_b53c978fa132e2e6b091";
export const url=new URL("../icons/drag_indicator.svg?v=45db1d610fee0309ccc7bd1300da87db9c70da80d7af07a2e5758611070a31ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
