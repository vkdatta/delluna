export const name="crane-tower-thin";
export const id="dl_047b43da9bb14ace8cf5";
export const url=new URL("../icons/crane-tower-thin.svg?v=b698fd708f1ee71569b82314c00fabb8f1cad4aff6acce53fb44d84b68e0f6d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
