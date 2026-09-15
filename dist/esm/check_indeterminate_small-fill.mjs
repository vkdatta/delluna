export const name="check_indeterminate_small-fill";
export const id="dl_490005d0106341a9b22f";
export const url=new URL("../icons/C/check_indeterminate_small-fill.svg?v=e09d536f0a057c283e2fadfd74d8261de804023def1577edb92e157fdbadd26a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
