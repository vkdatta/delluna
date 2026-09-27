export const name="indeterminate_question_box-fill";
export const id="dl_e2a779c24ca390a64390";
export const url=new URL("../icons/indeterminate_question_box-fill.svg?v=890fd1739f0a195bd75579dc6b5e3baff1df3004f89ad59406100e6781d86300",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
