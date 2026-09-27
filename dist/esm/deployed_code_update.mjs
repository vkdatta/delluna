export const name="deployed_code_update";
export const id="dl_86310dc31a551298a22a";
export const url=new URL("../icons/deployed_code_update.svg?v=51943942eec9f251b44359e6818d49226bfb9478b2562407f9f1961a8808408f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
