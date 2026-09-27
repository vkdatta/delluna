export const name="cloud-check-light";
export const id="dl_8b1ba63125564423af42";
export const url=new URL("../icons/cloud-check-light.svg?v=ce75417295a38ea16ad6038965e4ad22617d15f3e77cc40262e9e2923ed4be4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
