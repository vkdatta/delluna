export const name="minus-fill";
export const id="dl_e31879da11d440889008";
export const url=new URL("../icons/minus-fill.svg?v=1b725057137936437c69a22396215d9280bbc45edd9d49c2263d88cf6c01e3ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
