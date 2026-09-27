export const name="lucid_3-phone-call";
export const id="dl_43664c461e5542ee9988";
export const url=new URL("../icons/lucid_3-phone-call.svg?v=cd962c9014af9c1da0dbee9dae29b66b1f75d143ea0645f2f2302b68dab592e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
