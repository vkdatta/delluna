export const name="temple_hindu";
export const id="dl_ab114f00a4eb46a69185";
export const url=new URL("../icons/temple_hindu.svg?v=8f12ce129f44cde59cfb1f74f879106831986b96effdb720915b760c8b85d59b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
