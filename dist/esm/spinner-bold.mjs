export const name="spinner-bold";
export const id="dl_a8e14fb6ac0d4a06bfbf";
export const url=new URL("../icons/S/spinner-bold.svg?v=75b33fa7620212ded063bdbdacf43b0d5872ccdcd69ae73a7aec8286dc91f036",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
