export const name="superset-proper-of-thin";
export const id="dl_717e778109ca1db591c0";
export const url=new URL("../icons/superset-proper-of-thin.svg?v=a8a6b387d30aa69867476a8c5c0149fee0e64669a04d3bcc35a6dce8affa3d7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
