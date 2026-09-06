export const name="notion-logo-thin";
export const id="dl_89fe07272b2e4a839f72";
export const url=new URL("../icons/notion-logo-thin.svg?v=92584ef4de8aac77b5b403a4cd5433e226535faab7d91446678db056979c07f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
