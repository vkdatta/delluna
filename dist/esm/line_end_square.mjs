export const name="line_end_square";
export const id="dl_cf8598d170e99f21286a";
export const url=new URL("../icons/line_end_square.svg?v=032be33d8ff3718491f15d303d140992b1af04566bb2997e23318d956e43b5b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
