export const name="living-fill";
export const id="dl_f93c94f60ebb41117635";
export const url=new URL("../icons/living-fill.svg?v=a4c1407e985bcdf1bdc51265a50acd8e12eac47dc1f2e0afb2ca8f69b290519f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
