export const name="corners-out-fill";
export const id="dl_5be14bdc040b454c816b";
export const url=new URL("../icons/corners-out-fill.svg?v=82e2b9fda789688870f08195239a5505fa63c400cf0e3f4c66e46f20536bab89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
