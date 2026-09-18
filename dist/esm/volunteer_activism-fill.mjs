export const name="volunteer_activism-fill";
export const id="dl_52c2f3646811443bbc61";
export const url=new URL("../icons/V/volunteer_activism-fill.svg?v=3f418152538d117c69890555da16f66fca063140b58633e2952d8dc22552614b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
