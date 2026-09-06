export const name="cell-signal-high-thin";
export const id="dl_dace31e0371344bfade9";
export const url=new URL("../icons/cell-signal-high-thin.svg?v=70cc1e8d61d9afcd1240bfefa5ee4b062aa3cb7a4fac91f8ef05eb881575bf7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
