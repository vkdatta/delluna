export const name="map-pin-simple-line-bold";
export const id="dl_b7b2a795b9074c368d4a";
export const url=new URL("../icons/map-pin-simple-line-bold.svg?v=afed9e9d2b472eb8f55570d19f6909181520d567098b5f3577bc30fcae789208",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
