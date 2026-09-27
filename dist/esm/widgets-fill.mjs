export const name="widgets-fill";
export const id="dl_8c8c8603fbea76de56c1";
export const url=new URL("../icons/widgets-fill.svg?v=3d9a9d348692d899e563e42e6a3091e8e6b427100b38f31db2ec9c4ff624105d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
