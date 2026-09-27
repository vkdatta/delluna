export const name="currency-circle-dollar-light";
export const id="dl_8362e452261d4395b660";
export const url=new URL("../icons/currency-circle-dollar-light.svg?v=f7324db174f9655a4fc023b694dcfb1454c755ad22ac3f9abd1f2945ef720433",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
