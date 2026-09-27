export const name="frame_person_off-fill";
export const id="dl_a822b13d58c15efc12ce";
export const url=new URL("../icons/frame_person_off-fill.svg?v=ad15eee33bfcc8f456ff5bd03cee5a1b11d0b8d276d493fc38e5a6ebb02beb32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
