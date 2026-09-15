export const name="cloud_off-fill";
export const id="dl_f7049a33b0a54862b85c";
export const url=new URL("../icons/C/cloud_off-fill.svg?v=84b37d52c0dd86df66b62699a5f3003d4c937d68ca124c8655b0484ddf712277",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
