export const name="cardiology";
export const id="dl_8d27edb5320f7675f895";
export const url=new URL("../icons/cardiology.svg?v=df4b645f69d2e40e07590daaa76dcd7150387bc95a0b337ebf323f0f09ba20a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
