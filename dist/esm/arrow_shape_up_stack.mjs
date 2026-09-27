export const name="arrow_shape_up_stack";
export const id="dl_48ffa69a083958151c99";
export const url=new URL("../icons/arrow_shape_up_stack.svg?v=9836010543a5068a8200b6cb7571f8531e57e1edc47f557787184e6508853bc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
