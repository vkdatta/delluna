export const name="cool_to_dry";
export const id="dl_5c257bbffe8548b6bb06";
export const url=new URL("../icons/C/cool_to_dry.svg?v=45be2e83932ed680f8058b51e4fb5bfe8c55a668fbffb52d82f8c5ccccded246",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
