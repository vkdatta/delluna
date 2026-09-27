export const name="attribution-fill";
export const id="dl_5619c385cd23ce2cfca9";
export const url=new URL("../icons/attribution-fill.svg?v=f2dda76807d78a53d9eb46e55971a200d0437bff17dea260f837e54c91069c18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
