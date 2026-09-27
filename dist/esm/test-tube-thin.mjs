export const name="test-tube-thin";
export const id="dl_88f450a923f84ffa0714";
export const url=new URL("../icons/test-tube-thin.svg?v=2dd2e774b1431f2401d701b44ebe7038e701a7f3d3cf052c44f41d6474ec1e0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
