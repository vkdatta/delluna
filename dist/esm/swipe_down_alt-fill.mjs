export const name="swipe_down_alt-fill";
export const id="dl_cf190e48854a4ab4bfd5";
export const url=new URL("../icons/S/swipe_down_alt-fill.svg?v=b77cf74b96869158f683b146ebce986828690533a528042d869f549605425356",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
