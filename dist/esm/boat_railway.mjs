export const name="boat_railway";
export const id="dl_8a05d8816d624265ab39";
export const url=new URL("../icons/B/boat_railway.svg?v=83915ef9481d862c4e9b83866c686018514bdae5b02a6b008218019031aa0d48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
