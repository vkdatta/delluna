export const name="tonality-fill";
export const id="dl_00c580e0ff05450b8d31";
export const url=new URL("../icons/tonality-fill.svg?v=53cd68f9aadc4b394f5ee2f413e548cca75193e4335fd8807d0616d1aef3ddb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
