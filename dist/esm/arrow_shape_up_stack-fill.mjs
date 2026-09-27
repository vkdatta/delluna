export const name="arrow_shape_up_stack-fill";
export const id="dl_bb61ddfe9259af66ae5a";
export const url=new URL("../icons/arrow_shape_up_stack-fill.svg?v=eb526d8d45a135ada26d8d1b49b73dc99e40bc4e0805e03bb1d25e1d7e6b56e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
