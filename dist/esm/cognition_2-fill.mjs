export const name="cognition_2-fill";
export const id="dl_4bfa8dc0f45c2789e90e";
export const url=new URL("../icons/cognition_2-fill.svg?v=9322f36b64aed56022e75cb4343c491fd64fb0e414f3499f04c3ba7798d53501",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
