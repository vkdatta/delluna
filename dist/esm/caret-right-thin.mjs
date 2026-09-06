export const name="caret-right-thin";
export const id="dl_b11577132a2245598cef";
export const url=new URL("../icons/caret-right-thin.svg?v=c49929df35ab15d2c072b71bee45b7d18f0bee69878832e9f94e4a7003a2cb5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
