export const name="tab_group-fill";
export const id="dl_d14369c969b1fefee70e";
export const url=new URL("../icons/tab_group-fill.svg?v=2883b347780e3f5a507546f213b76be0e33077f7de4f083fc6e03f63f180d2d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
