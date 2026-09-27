export const name="expand_circle_down-fill";
export const id="dl_16e909d222da424c93ef";
export const url=new URL("../icons/expand_circle_down-fill.svg?v=99c89fb8488fe820f7c5c1f2004a5a4fa63c2501f3b9805103c5b9516f930132",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
