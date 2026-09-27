export const name="arrows-out-line-horizontal-thin";
export const id="dl_0bfd9a2a5d6148a09ccd";
export const url=new URL("../icons/arrows-out-line-horizontal-thin.svg?v=a4029ffb7e740552a83c9fa84c0bd19102dec0de375d27c65d4701b3b428975b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
