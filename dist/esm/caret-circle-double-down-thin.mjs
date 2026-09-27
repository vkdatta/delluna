export const name="caret-circle-double-down-thin";
export const id="dl_101dfb467aef4d5594a0";
export const url=new URL("../icons/caret-circle-double-down-thin.svg?v=5169678c2ca7783fa598102d76a65976207785990a7de329031c28a736248017",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
