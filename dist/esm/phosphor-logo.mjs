export const name="phosphor-logo";
export const id="dl_a40b0befca7c486f8377";
export const url=new URL("../icons/phosphor-logo.svg?v=210ee73d573068d6e32a4804cf5608d74630ac210d4ffbad0a27b8b5cec11a1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
