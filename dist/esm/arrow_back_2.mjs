export const name="arrow_back_2";
export const id="dl_22bdee68bb3ea6989036";
export const url=new URL("../icons/arrow_back_2.svg?v=145c4a9e108633d3404f14005b85e565f0a856bdfc11e57c298f3369a9018d75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
