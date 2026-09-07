export const name="quotes-thin";
export const id="dl_607ddf085c0e45ba8bdc";
export const url=new URL("../icons/quotes-thin.svg?v=a844d2d5dc739e119e8f2e08aafc6ed2213c96c8120a46b30b2e96ad80fe3416",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
