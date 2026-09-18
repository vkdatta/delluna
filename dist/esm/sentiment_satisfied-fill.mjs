export const name="sentiment_satisfied-fill";
export const id="dl_4b7fac600ccd4abb9e0c";
export const url=new URL("../icons/S/sentiment_satisfied-fill.svg?v=95db748a45be29d3b1424564f0bc24b54bb690807d947842d10849f63ae46a25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
