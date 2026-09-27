export const name="file-png-thin";
export const id="dl_364a11041e684d709cff";
export const url=new URL("../icons/file-png-thin.svg?v=f7a52f991fd8639632e26820c845778fd6844c9bf9ae84489c7389c2d8fc4d97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
