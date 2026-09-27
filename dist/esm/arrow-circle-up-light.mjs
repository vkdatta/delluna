export const name="arrow-circle-up-light";
export const id="dl_1516a03c3259451f9b56";
export const url=new URL("../icons/arrow-circle-up-light.svg?v=830fecf8f084c7a41b0b9e905937d261f23744e50c4fda84b3b9af2e8494740a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
