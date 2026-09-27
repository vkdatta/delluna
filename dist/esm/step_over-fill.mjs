export const name="step_over-fill";
export const id="dl_b1ee53796ef5ebd9ae95";
export const url=new URL("../icons/step_over-fill.svg?v=07e38504d19cecce08247532651865c5a0f3ae04b5c7a60bf14d15979f3c25a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
