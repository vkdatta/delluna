export const name="tire-thin";
export const id="dl_b77a37bdf37435953c91";
export const url=new URL("../icons/tire-thin.svg?v=4dffc0c4dd3fc35cafe994ad82243b29f5d7e2a57870f5f17052401877d9cf40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
