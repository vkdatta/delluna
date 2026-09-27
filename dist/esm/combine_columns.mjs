export const name="combine_columns";
export const id="dl_62f078eb5710e4243ea3";
export const url=new URL("../icons/combine_columns.svg?v=1fc3d3c476ae5089c4de7d61a80049456d79c785abf93a74e2eb0a54d303aae3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
