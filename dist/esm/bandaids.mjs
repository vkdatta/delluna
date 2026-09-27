export const name="bandaids";
export const id="dl_83c03e3dd8de42079cd8";
export const url=new URL("../icons/bandaids.svg?v=1397476c45c7ab2f65aa2f56e122d6ffe09863eddfc7c84a8434da6eddda5448",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
