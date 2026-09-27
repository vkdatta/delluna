export const name="reset_image-fill";
export const id="dl_49e4c2f43c02b6f37f23";
export const url=new URL("../icons/reset_image-fill.svg?v=561e7ea633289361eea8c54ff409607360a170d98601f2dd40799265493525d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
