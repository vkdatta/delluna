export const name="dress-duotone";
export const id="dl_9117d02ad8f843c5be5d";
export const url=new URL("../icons/dress-duotone.svg?v=3b904c4c16ae66e119ab8d5569aa4c6d4c7f89b2672352e19044ddbbb10f462f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
