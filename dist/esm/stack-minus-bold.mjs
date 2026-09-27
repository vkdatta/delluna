export const name="stack-minus-bold";
export const id="dl_88cc52e36cf01490e9f1";
export const url=new URL("../icons/stack-minus-bold.svg?v=e7fbd3ffbecde6fe36a6b0add4f1a32664f0d4ea2245f63e491a1f6268468067",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
