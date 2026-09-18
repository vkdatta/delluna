export const name="step_over-fill";
export const id="dl_4e204100b2184dbca170";
export const url=new URL("../icons/step_over-fill.svg?v=eed975c353a620683158a20416c33edb2c23d8743a5779d4b2c449ff3680aa36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
