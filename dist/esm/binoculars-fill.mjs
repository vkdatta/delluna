export const name="binoculars-fill";
export const id="dl_c53be58c266943ff94e1";
export const url=new URL("../icons/binoculars-fill.svg?v=f35e37e0723537d4c6ec1f906bdaae80c91a652ddaf63c762d63a62148934b02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
