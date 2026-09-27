export const name="arrow-u-left-down-thin";
export const id="dl_97b3154b3bd1496fbf33";
export const url=new URL("../icons/arrow-u-left-down-thin.svg?v=1bee401d078389c5faa383b3a05d7b0a9e7d8f227aeaada46f188abb07156214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
