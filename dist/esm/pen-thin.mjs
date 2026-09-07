export const name="pen-thin";
export const id="dl_15af2e58216f47f88b39";
export const url=new URL("../icons/pen-thin.svg?v=0bc79f481a9a8530d424bf34d3516c7ddfdd0432afdacd9545722861a617ea48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
