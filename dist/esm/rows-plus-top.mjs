export const name="rows-plus-top";
export const id="dl_e504bac3e26a486bb036";
export const url=new URL("../icons/rows-plus-top.svg?v=6e99b3e8bc181419c7ccb2ee58ca082b8ecb728d5b5c6867463baa5c876d1c02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
