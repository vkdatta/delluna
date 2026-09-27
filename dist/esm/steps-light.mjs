export const name="steps-light";
export const id="dl_2fd713eec1a9761676c4";
export const url=new URL("../icons/steps-light.svg?v=747843597e3f70b1053e9dfd49e7ac54ccb5d0db67b5177ca6574b5327693f44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
