export const name="lightning-bold";
export const id="dl_074a2928b148497d8351";
export const url=new URL("../icons/lightning-bold.svg?v=b7d994765514d92980fdecc8dc4efb8fbb7281750d999ac1685f094e60f30aef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
