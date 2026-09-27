export const name="linear_scale-fill";
export const id="dl_9dab5409dda290af66a7";
export const url=new URL("../icons/linear_scale-fill.svg?v=e459ba19d5df0e16d0057b88ddee92582ddc7363de09f4fe03d7097cecec63bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
