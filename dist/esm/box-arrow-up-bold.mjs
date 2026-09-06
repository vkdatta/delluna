export const name="box-arrow-up-bold";
export const id="dl_ce3c7a76139f4b59818b";
export const url=new URL("../icons/box-arrow-up-bold.svg?v=c0e0fe457251584f4f406f7a1de8bc5dd8f3232885ca213e557670b5dbf11a5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
