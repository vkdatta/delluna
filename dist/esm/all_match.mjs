export const name="all_match";
export const id="dl_d9c499ef27d2bd9b64d8";
export const url=new URL("../icons/all_match.svg?v=483cd8cec2d088115a525c58447e2dee19aa97e3bcef323b499631d53da70352",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
