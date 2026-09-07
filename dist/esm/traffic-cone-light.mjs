export const name="traffic-cone-light";
export const id="dl_c941e078a5484e0582a3";
export const url=new URL("../icons/T/traffic-cone-light.svg?v=74145ea2e39337b17980d3fb1172065217e1232c41a13064bc7976710b6b29c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
