export const name="highlighter-circle";
export const id="dl_0d95b71a66d541b4b849";
export const url=new URL("../icons/highlighter-circle.svg?v=82ff900065915f17c01db9becc07b1ff1cafa188ecdf4663fb6426fd20fe0447",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
