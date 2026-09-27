export const name="square-slash";
export const id="dl_fee9b8386172472092e7";
export const url=new URL("../icons/square-slash.svg?v=8cf7d83e02a52421b56fe8aa441af44d620ad9c2f57269a4e2dbc0928ad3990c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
