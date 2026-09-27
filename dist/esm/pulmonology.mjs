export const name="pulmonology";
export const id="dl_a3eb283ac73c6dbadc37";
export const url=new URL("../icons/pulmonology.svg?v=002e0050615a9c301f0e87f7cd0fbe0ff93252d6935ca229c687ac05c37c01a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
