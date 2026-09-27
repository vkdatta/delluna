export const name="shield-thin";
export const id="dl_50f47fa8ad341ba82db2";
export const url=new URL("../icons/shield-thin.svg?v=3a61bab2c78ccf4bf00ea2254a14d4713c0664212db68891802ee239d32d28ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
