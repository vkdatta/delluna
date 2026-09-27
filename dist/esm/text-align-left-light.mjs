export const name="text-align-left-light";
export const id="dl_818260c235c8b38f72cd";
export const url=new URL("../icons/text-align-left-light.svg?v=597cf045692bf94127c7b7a548b178a33460c630d907432892efb690f7ade246",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
