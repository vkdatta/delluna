export const name="house-thin";
export const id="dl_4cc4a245049744e1bd33";
export const url=new URL("../icons/house-thin.svg?v=ea54d9bf25261b5254c6f5aba4c43bed003536fc15474bc422ffe74710919cef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
