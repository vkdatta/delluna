export const name="user-circle-dashed";
export const id="dl_90756635e219205bad23";
export const url=new URL("../icons/user-circle-dashed.svg?v=6707054336a133ba6380b8bd592acc1344be253f64d48f1b4a70f8bec93bb0b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
