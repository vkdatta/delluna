export const name="timeline";
export const id="dl_e0346f4eb5234093a02f";
export const url=new URL("../icons/timeline.svg?v=70ee7e7d3c96a3f110cdf49c73a32ca1bbe634038301d1762e6f4a8ad354e027",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
