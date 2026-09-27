export const name="traffic-cone-bold";
export const id="dl_2c67d3215ddb899eee29";
export const url=new URL("../icons/traffic-cone-bold.svg?v=221ca6686cd5de3d8fbd235fbab91d62c3d5c7cde78da05824fc366af55985b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
