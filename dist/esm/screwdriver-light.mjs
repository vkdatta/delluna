export const name="screwdriver-light";
export const id="dl_55bdeccdcdfe3448d5c0";
export const url=new URL("../icons/screwdriver-light.svg?v=1172984171e00af248da369a43a03eba7179c65c021baebbfe8627155991b9e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
