export const name="tram-front";
export const id="dl_786b1bb617a04861b0ea";
export const url=new URL("../icons/tram-front.svg?v=5a20b1b1177cf78ca898751610e2121d8c60502802412c167e44c2ff41f90913",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
