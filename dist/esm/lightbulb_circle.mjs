export const name="lightbulb_circle";
export const id="dl_aa9822a5193115a537d3";
export const url=new URL("../icons/lightbulb_circle.svg?v=710122394b8ad4a3538cf87210694e10c259a91346cef7ef530a6a792a905f3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
