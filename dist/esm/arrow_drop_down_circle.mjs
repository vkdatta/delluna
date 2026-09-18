export const name="arrow_drop_down_circle";
export const id="dl_605b8dc51552481d88d1";
export const url=new URL("../icons/arrow_drop_down_circle.svg?v=28a957ffd6d8924c0a57b8946f6a42308774d3a2d4fc143f9137c66cd676b887",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
