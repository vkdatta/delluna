export const name="plus-circle-light";
export const id="dl_5ba5ea86b6a84d8ca497";
export const url=new URL("../icons/plus-circle-light.svg?v=79f47201eef45686bbe5c07c048a010ee85e192111097e11185a649670ae71f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
