export const name="lucid_2-line-squiggle";
export const id="dl_a377549f4b2441b4b278";
export const url=new URL("../icons/lucid_2-line-squiggle.svg?v=4c656d2bb07a95adc59e0cb9ba0848cdca3b079eff331e437220deefcd157d3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
