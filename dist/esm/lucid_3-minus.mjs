export const name="lucid_3-minus";
export const id="dl_b489c283c5ee4ca58496";
export const url=new URL("../icons/lucid_3-minus.svg?v=78297bf74899eca8f8c2211b0b40be100005d9fdf654178f7ee9326a782dc842",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
