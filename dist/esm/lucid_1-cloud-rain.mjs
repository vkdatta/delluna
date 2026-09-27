export const name="lucid_1-cloud-rain";
export const id="dl_db95ee0d37d94101b2fc";
export const url=new URL("../icons/lucid_1-cloud-rain.svg?v=9cc1ab115a415220d44fc4878996dde5cd97cd1941381480169d8918804b7605",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
