export const name="stripe-logo";
export const id="dl_17b631f5d716274f1f17";
export const url=new URL("../icons/stripe-logo.svg?v=6268342bf88be7bbebc703685e49084fc8af740e48764ef88fffd4f4f3edbfec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
