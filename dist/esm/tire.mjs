export const name="tire";
export const id="dl_f9538b8d7438052c1bc8";
export const url=new URL("../icons/tire.svg?v=a0741cc08b028987784da6a489886cdeb8684b4a662227e7e74da7c998c65dc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
