export const name="currency-cny-duotone";
export const id="dl_759c78a92e744a43a9af";
export const url=new URL("../icons/currency-cny-duotone.svg?v=dd5e8905d3d3f1fc56450bfe712693c4c0931e945475314636be5da0509d84b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
