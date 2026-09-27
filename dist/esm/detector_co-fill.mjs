export const name="detector_co-fill";
export const id="dl_7a57c50da10ca716d619";
export const url=new URL("../icons/detector_co-fill.svg?v=85d0a8e2ea82ef741aa9fc82d5c4d98c2ee0581fbe7a9cdfb4cc85a955e35b22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
