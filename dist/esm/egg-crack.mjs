export const name="egg-crack";
export const id="dl_b066251711224370bcd6";
export const url=new URL("../icons/egg-crack.svg?v=00eeb6530235239f92c3d2722cacf3ac65ef0c36079cf4170ac292891fc0edc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
