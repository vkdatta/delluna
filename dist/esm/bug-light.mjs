export const name="bug-light";
export const id="dl_99e79f692dcb4860b5af";
export const url=new URL("../icons/bug-light.svg?v=db34f661034b8c98ab4c8bfbc5b0561ec89cd0be1ea4cbb2fa93d2e521c890ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
