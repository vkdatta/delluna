export const name="pen-duotone";
export const id="dl_c8d31be94a7747fabfac";
export const url=new URL("../icons/pen-duotone.svg?v=3f417054f2b2cbebf49f705e7910d651cc8ce92e26798d77556504aef4cc10d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
