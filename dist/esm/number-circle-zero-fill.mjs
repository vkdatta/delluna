export const name="number-circle-zero-fill";
export const id="dl_768183f1a1a142b18814";
export const url=new URL("../icons/number-circle-zero-fill.svg?v=10aa142140518ca262a007d19e98a6b4d300a16fb9ba31a57e7b5c3975dfa08e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
