export const name="crisis_alert-fill";
export const id="dl_45bafe98871a48dbab81";
export const url=new URL("../icons/C/crisis_alert-fill.svg?v=f5df1498b338c9de45bec1ab1f5303611bde7c13d5d9cb08b2e1e6751b50d444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
