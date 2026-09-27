export const name="arrow-circle-left-thin";
export const id="dl_435475120c034368a871";
export const url=new URL("../icons/arrow-circle-left-thin.svg?v=54905b8bb3b23abf380d0940fc50e97018bac0d6c37137af578c98c871747a89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
