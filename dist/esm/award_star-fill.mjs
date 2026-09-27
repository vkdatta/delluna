export const name="award_star-fill";
export const id="dl_879e630d0d817c4fbafe";
export const url=new URL("../icons/award_star-fill.svg?v=eb6155be52f5fee2e365798960105825a39363f55357da687c69c23928c6846e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
