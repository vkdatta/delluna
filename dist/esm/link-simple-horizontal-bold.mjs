export const name="link-simple-horizontal-bold";
export const id="dl_f663ae68f7504b9c97b3";
export const url=new URL("../icons/link-simple-horizontal-bold.svg?v=285e36540963a93c21d2b1a4addeb396691644fbe30e439d767852b1786ddb5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
