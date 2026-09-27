export const name="brain-light";
export const id="dl_007ad488bb6e49149e8c";
export const url=new URL("../icons/brain-light.svg?v=51429a90c9a10b55af12d61ba0d293ae3d916409d3e2ffab845fab088c083e77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
