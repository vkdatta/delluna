export const name="caret-left-light";
export const id="dl_b3d71319528441c9aaa3";
export const url=new URL("../icons/caret-left-light.svg?v=06d8bedd90c3c35dc88e0c08a6643bd45f49843333f828428c305aae5dbbc8b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
