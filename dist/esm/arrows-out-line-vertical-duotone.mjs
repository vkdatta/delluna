export const name="arrows-out-line-vertical-duotone";
export const id="dl_d913d6aea00e4455b099";
export const url=new URL("../icons/arrows-out-line-vertical-duotone.svg?v=b26cf697543431973e459ace4ca802ba070c367eac5b66b17354a4710cc5e8b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
