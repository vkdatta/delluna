export const name="crosshair-simple";
export const id="dl_a0fff58075ca499b8b6f";
export const url=new URL("../icons/crosshair-simple.svg?v=9cbb4518318fed658916fac86697620abcee030e368b07b927371f18aa4b159b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
