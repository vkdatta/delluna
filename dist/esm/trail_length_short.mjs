export const name="trail_length_short";
export const id="dl_3cc1ed8f03aebdde52d2";
export const url=new URL("../icons/trail_length_short.svg?v=c3ee201a5172d39b407dafe77829c1d672ccc23bc67711af4c18bd3d4fafda37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
