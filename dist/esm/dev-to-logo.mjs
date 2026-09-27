export const name="dev-to-logo";
export const id="dl_f8892c076a0d421a9d7b";
export const url=new URL("../icons/dev-to-logo.svg?v=be84d2e3dd307ff35aeab39aadb4b6ebe452659820373c7fc38102f83e5d9cbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
