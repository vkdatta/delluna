export const name="subdirectory_arrow_right-fill";
export const id="dl_087d28ec284160c550d7";
export const url=new URL("../icons/subdirectory_arrow_right-fill.svg?v=0211be456618544e8c3e8e678a8204f6990f3298d132eb69fb80fe9bd3c6ce09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
