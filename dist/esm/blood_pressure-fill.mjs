export const name="blood_pressure-fill";
export const id="dl_2b64df6dda6ef369cf78";
export const url=new URL("../icons/blood_pressure-fill.svg?v=3fc1a47ba8772ffdfebaa6bdd68c2013d1aad229d58b941cdf58c24252a1501e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
