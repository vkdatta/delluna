export const name="check_indeterminate_small-fill";
export const id="dl_270028474162835ee237";
export const url=new URL("../icons/check_indeterminate_small-fill.svg?v=cc4251e468773208f2b76a8d60505032f16cc48149039fbf2aa245f98829ee05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
