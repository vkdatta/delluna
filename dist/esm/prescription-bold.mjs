export const name="prescription-bold";
export const id="dl_0f403a71ea684ad4aa7d";
export const url=new URL("../icons/prescription-bold.svg?v=054d1775db05f617ba70ca1fcf7b575a9d185027c80d3cb5362a24191f17c777",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
