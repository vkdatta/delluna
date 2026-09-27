export const name="shield_question-fill";
export const id="dl_4daeb02561d0f242fe38";
export const url=new URL("../icons/shield_question-fill.svg?v=f2ddafbd283486b0d3b69c065ac7b77e00e2910c80b0fd368fceb1473d26afb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
