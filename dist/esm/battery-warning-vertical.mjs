export const name="battery-warning-vertical";
export const id="dl_ab81505cebb94588b491";
export const url=new URL("../icons/battery-warning-vertical.svg?v=35c2e80e5e67f96786efd30e4ff1769c4b95e13f0bac79f174d3208316988c85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
