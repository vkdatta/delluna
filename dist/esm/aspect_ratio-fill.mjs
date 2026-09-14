export const name="aspect_ratio-fill";
export const id="dl_188f9b851a714905b856";
export const url=new URL("../icons/A/aspect_ratio-fill.svg?v=8578ba4527714dcd7022a32f13307edd8920af10433f486fd45fccc903d44a0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
