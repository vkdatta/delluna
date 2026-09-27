export const name="currency-inr-thin";
export const id="dl_20213b4a217140b58cc7";
export const url=new URL("../icons/currency-inr-thin.svg?v=1454426b707c87695eff1b42e1a704d7f32cea671ed18fd684c2765a96936e19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
