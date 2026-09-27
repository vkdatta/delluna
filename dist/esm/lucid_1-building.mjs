export const name="lucid_1-building";
export const id="dl_fea373519e484f0ca496";
export const url=new URL("../icons/lucid_1-building.svg?v=c868022836c6eac0f0507f9f2932cf1ea6bde20fc66674a4c99bbe9fba4798c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
