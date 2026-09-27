export const name="fallout-shelter-duotone";
export const id="dl_a1486f53f08847afa925";
export const url=new URL("../icons/fallout-shelter-duotone.svg?v=8d3a6605cbc135c02dff8865039ca21f92fccc6e38a048ba18c8633c456340da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
