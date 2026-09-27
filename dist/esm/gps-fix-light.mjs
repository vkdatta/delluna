export const name="gps-fix-light";
export const id="dl_d35d9b86ba6d4242b85d";
export const url=new URL("../icons/gps-fix-light.svg?v=715602d27ba5b334b18d2413eb271d3131c866e10d36d77c949fd3e1a3f3660b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
