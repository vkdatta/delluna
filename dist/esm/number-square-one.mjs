export const name="number-square-one";
export const id="dl_51066a748e9247e9b52e";
export const url=new URL("../icons/number-square-one.svg?v=66e7326a47b1a584ffdbd98a491755600b05a847e9a12d3076329a342174f244",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
