export const name="contactless-payment-bold";
export const id="dl_42e959bc9bef40a4afc9";
export const url=new URL("../icons/contactless-payment-bold.svg?v=70ab2977625249c5d04bcbf9ec0243e8e90a12f51fe66ee48123c612527cb034",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
