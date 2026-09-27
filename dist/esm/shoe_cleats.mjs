export const name="shoe_cleats";
export const id="dl_f7f9509fabacb8507070";
export const url=new URL("../icons/shoe_cleats.svg?v=01064c381bda8383588e1aa85117c13c4b118d9523181b320d5cd5885da88b27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
