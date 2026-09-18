export const name="lock_open_right-fill";
export const id="dl_18fcab7b4c4141f69db8";
export const url=new URL("../icons/L/lock_open_right-fill.svg?v=f1ed7281820bfc66c60c1ffb0fb5bfa85e73ed70838b8dbcf9e7a348614903db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
