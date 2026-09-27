export const name="directions_subway";
export const id="dl_c5d04be0a9f9403e742b";
export const url=new URL("../icons/directions_subway.svg?v=8cf1b8a74923860d60478479657f94c2a7d473f18fed81129242580e72ff6ba8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
