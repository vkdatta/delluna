export const name="trip_origin";
export const id="dl_94b1cb12de852064c831";
export const url=new URL("../icons/trip_origin.svg?v=c9552e331f825c04f76a57f418feffef3ee7e2affabbeb6f7a04c1a635fcba46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
