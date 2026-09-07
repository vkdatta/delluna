export const name="coat-hanger-duotone";
export const id="dl_1eeee8bfc0ec47fe8d5f";
export const url=new URL("../icons/coat-hanger-duotone.svg?v=4248323cbc6324149fa900907fc3153ebfc2d360bd2220c457961aff10ac4fef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
