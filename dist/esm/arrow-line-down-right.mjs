export const name="arrow-line-down-right";
export const id="dl_8cd72d0a140c4bd584e6";
export const url=new URL("../icons/arrow-line-down-right.svg?v=47d3b90932351337626422afdba3875a4a4c91f54e72c36b6e38ae78e58c4fad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
