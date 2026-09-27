export const name="center_focus_strong-fill";
export const id="dl_f6a184a006bfb7b2b0b5";
export const url=new URL("../icons/center_focus_strong-fill.svg?v=06b9780e8d7b7cac461fa3da0784705154515cb1f4988e73aaa144995019042a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
