export const name="arrow_shape_up_stack";
export const id="dl_f48838548ce14bad93ef";
export const url=new URL("../icons/A/arrow_shape_up_stack.svg?v=a18f59d58131cde1e7a9f04bf9d4cf0b2984f364fc5cb1b8113595b3e471ae4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
