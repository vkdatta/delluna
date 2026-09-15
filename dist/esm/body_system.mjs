export const name="body_system";
export const id="dl_68f060e820024dfbaf7d";
export const url=new URL("../icons/B/body_system.svg?v=46a90ce875cd30f6a6b711251564765f4e809fdd74f0c22518a164f0742b3f89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
