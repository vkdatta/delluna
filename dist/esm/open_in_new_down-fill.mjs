export const name="open_in_new_down-fill";
export const id="dl_5441808b6d90f95f6c30";
export const url=new URL("../icons/open_in_new_down-fill.svg?v=8ad552bca0144fdd36394bf1a66640e9dc809bb472c255128e234da55e2968ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
