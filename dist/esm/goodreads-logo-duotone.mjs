export const name="goodreads-logo-duotone";
export const id="dl_acb0cf1017d044d482ed";
export const url=new URL("../icons/goodreads-logo-duotone.svg?v=005aa6433bfdd0f11daf2873d28cd3a70c164b66cf2209fbafbdcf9c2423603a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
