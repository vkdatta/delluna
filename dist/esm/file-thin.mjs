export const name="file-thin";
export const id="dl_70fe5d294c274d9a8ce4";
export const url=new URL("../icons/file-thin.svg?v=195e5c6d5520a5ab15a3cab6aa7b6fca656ad44cdf4aa468588d90294a9c9d1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
