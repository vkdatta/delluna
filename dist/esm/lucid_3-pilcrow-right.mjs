export const name="lucid_3-pilcrow-right";
export const id="dl_c48607d8e5a14960a476";
export const url=new URL("../icons/lucid_3-pilcrow-right.svg?v=53b71632a2f13ee2d1cc276f9a780488933e4ceb8309272755fa0eb263638958",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
