export const name="eyeglasses_2";
export const id="dl_0f073f65e483ae1bd204";
export const url=new URL("../icons/eyeglasses_2.svg?v=3d9297691767e7bec1a018ec6698f4cea1e1babc391e15505edd8eba9942bd7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
