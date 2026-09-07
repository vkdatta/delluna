export const name="caret-line-up-bold";
export const id="dl_a93ce1f00bf748d9b589";
export const url=new URL("../icons/caret-line-up-bold.svg?v=d17786c452ffd60b3c4fbcbe38737720e18d9c5d39f77f915afb3d9911d076ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
