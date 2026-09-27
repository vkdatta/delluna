export const name="chart-pie-thin";
export const id="dl_fdaaf415b22c435e8b24";
export const url=new URL("../icons/chart-pie-thin.svg?v=baac11be1c9471a73e2bdaebe2bd9b86917e017be9084367c175a38f70ddc5f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
