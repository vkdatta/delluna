export const name="egg-crack-light";
export const id="dl_0173d482496342edb0f0";
export const url=new URL("../icons/egg-crack-light.svg?v=f0fa13a9303453aeadf004577fb12d726c25aea053f090c34413413418303601",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
