export const name="breastfeeding-fill";
export const id="dl_6f1db520f57789f2f081";
export const url=new URL("../icons/breastfeeding-fill.svg?v=0690f6ef1ce859b9677d37ea1ed3ab148bf47ca1f0f8ba5a93286c4d33d1cb1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
