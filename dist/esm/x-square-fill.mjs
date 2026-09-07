export const name="x-square-fill";
export const id="dl_289b5fd11a64476db757";
export const url=new URL("../icons/X/x-square-fill.svg?v=fd1ac3299bb363f5559ac13d81c9b7140d5990d068a8c44fb827c777370ff4eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
