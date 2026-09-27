export const name="landslide";
export const id="dl_03905ae26b3843c3370a";
export const url=new URL("../icons/landslide.svg?v=72f2e4234b0703acff009811a53b38ae27bdea6f8436097b9b5e224928bfced9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
