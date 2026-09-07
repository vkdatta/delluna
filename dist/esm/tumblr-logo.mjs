export const name="tumblr-logo";
export const id="dl_328a88e0ff904462b96e";
export const url=new URL("../icons/T/tumblr-logo.svg?v=50bb388d138e727fc6006be18886aa45bab3b9b0ad0e24f90bbd539b345fafae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
