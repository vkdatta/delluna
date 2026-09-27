export const name="outdoor_grill-fill";
export const id="dl_6436888c37b30f86c052";
export const url=new URL("../icons/outdoor_grill-fill.svg?v=9ed3c83716b3ef77df7711d4fe7bf666ab78e73c90fb70113e42c3c02531b2d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
