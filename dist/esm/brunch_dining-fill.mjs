export const name="brunch_dining-fill";
export const id="dl_471e326a7e457a9edf88";
export const url=new URL("../icons/brunch_dining-fill.svg?v=7c7c8fe7126c1ab21f83181bb6f19ddbb9d5cb27164339b69d2067b88ad00fa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
