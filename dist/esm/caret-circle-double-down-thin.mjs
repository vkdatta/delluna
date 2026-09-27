export const name="caret-circle-double-down-thin";
export const id="dl_101dfb467aef4d5594a0";
export const url=new URL("../icons/caret-circle-double-down-thin.svg?v=045b33f98c9753817a3c3f1636893e37924f74cbd18d4ac3569c9b079f7f47db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
