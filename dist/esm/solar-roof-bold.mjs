export const name="solar-roof-bold";
export const id="dl_8f54a5a84d666451bcd9";
export const url=new URL("../icons/solar-roof-bold.svg?v=689b6fa00c6dd709335078cae664b0c0bc9aea9f96629e675697e4ff1af64286",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
