export const name="hands-clapping-light";
export const id="dl_0608f23a3fb04ad0abf4";
export const url=new URL("../icons/hands-clapping-light.svg?v=c787ad8b1741d72f98fd34e054ba363881dd30835ff750abd8ec776a99a6f7a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
