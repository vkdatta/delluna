export const name="lucid_3-sprout";
export const id="dl_e97635c1778e4ea09704";
export const url=new URL("../icons/lucid_3-sprout.svg?v=e051ab6c773b1febb7ea51589788bb0aac102df3669d6967d933cb62ad94b126",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
