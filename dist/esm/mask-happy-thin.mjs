export const name="mask-happy-thin";
export const id="dl_f503fd7bc18549d5a57d";
export const url=new URL("../icons/mask-happy-thin.svg?v=2846877e20273e2a9850180a87fa6c0a7de68a9f22c2a04d0fd33f196c6a5169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
