export const name="watch";
export const id="dl_0c6e4d29e2e7438d96fc";
export const url=new URL("../icons/watch.svg?v=d5783bd1259957b84143dfa280a0efba386d4b51d0aab82259e0eb65ba06bf25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
