export const name="selection-foreground-thin";
export const id="dl_d1d40b3250dba957da12";
export const url=new URL("../icons/selection-foreground-thin.svg?v=e20ccd13e4b2047f2708ff810ff009b65414a7d0498f1d99b54b3d756e83752c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
