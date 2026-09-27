export const name="kid_star";
export const id="dl_90cff2d1c683379d4d40";
export const url=new URL("../icons/kid_star.svg?v=3790fc9100f335798ff3b9d0ba1b4b652e2298fb7c508c337a9339551bbb1df6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
