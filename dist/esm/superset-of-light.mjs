export const name="superset-of-light";
export const id="dl_4b86fb4603b15b6387dc";
export const url=new URL("../icons/superset-of-light.svg?v=c7688d7c72fc5a2d1d7550373593d79ba1b33ee4a61a74dfd4c1e05da33af869",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
