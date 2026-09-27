export const name="lucid_3-scissors-line-dashed";
export const id="dl_7e8f181dc7d54dac9901";
export const url=new URL("../icons/lucid_3-scissors-line-dashed.svg?v=45cc2fff4ecfc7eedbc45ea7720cb4294d3f716e87500acb70e8f11b1576eeb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
