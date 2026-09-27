export const name="4k_plus";
export const id="dl_1a250899cec45ffe835d";
export const url=new URL("../icons/4k_plus.svg?v=3e1b41a2736d7be4719e459d5233fc0196923ac115d40060b0d275bd1d181d3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
