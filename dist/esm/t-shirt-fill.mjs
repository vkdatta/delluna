export const name="t-shirt-fill";
export const id="dl_9a413ea07d9869b1e0ad";
export const url=new URL("../icons/t-shirt-fill.svg?v=8ea26d479729103524d69045370376a03a26e038a8203c8d9c90bcdbe8fef5bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
