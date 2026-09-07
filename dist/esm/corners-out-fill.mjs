export const name="corners-out-fill";
export const id="dl_5be14bdc040b454c816b";
export const url=new URL("../icons/corners-out-fill.svg?v=206cdf1c6c7a3d2da17edebae2a122b5bcf8186f276170cac730a041c3077a1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
