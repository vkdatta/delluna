export const name="cube-focus-duotone";
export const id="dl_b3eefedd5fed48b28a90";
export const url=new URL("../icons/cube-focus-duotone.svg?v=1dac675a67172c9fea96b900e0023f1207ccaccfa3e0a93a323c68b29612af46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
