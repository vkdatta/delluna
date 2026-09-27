export const name="tumblr-logo";
export const id="dl_a2d462726b3a37555ba4";
export const url=new URL("../icons/tumblr-logo.svg?v=50bb388d138e727fc6006be18886aa45bab3b9b0ad0e24f90bbd539b345fafae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
