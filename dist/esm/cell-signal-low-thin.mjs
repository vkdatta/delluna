export const name="cell-signal-low-thin";
export const id="dl_ea28989a1e774cc68643";
export const url=new URL("../icons/cell-signal-low-thin.svg?v=cac5acb7983f59e2ef891af4460f0fff8296e6aa271c20d9066433e227fbc314",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
