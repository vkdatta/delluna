export const name="picture_in_picture_mobile-fill";
export const id="dl_59ae910a7a064e5fb055";
export const url=new URL("../icons/picture_in_picture_mobile-fill.svg?v=cf6da9415956314ed078f8767d36ff2317bfa2ebe21255a6f1754ac238af5fd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
