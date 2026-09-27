export const name="arrows-down-up-light";
export const id="dl_d5c7a0141fa44b44949c";
export const url=new URL("../icons/arrows-down-up-light.svg?v=4e70270b210c11dce024cc9a6e84a9c18925a54c790a2a71b88b1a3e96c97ced",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
