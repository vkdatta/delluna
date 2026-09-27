export const name="recent_patient";
export const id="dl_856a0c8dd945cc58fae3";
export const url=new URL("../icons/recent_patient.svg?v=37b0fe527eb2a64ba23d4f600fa43cda9646f60365d789d3c016c4f854c1a69f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
