export const name="lucid_1-bookmark-minus";
export const id="dl_5be028686ed84f8b87c0";
export const url=new URL("../icons/lucid_1-bookmark-minus.svg?v=38a9b74b5b6cb0106aa14170446f550f25edbd41c3cbd220b1535cdf5adacc70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
