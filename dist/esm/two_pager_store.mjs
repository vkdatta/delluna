export const name="two_pager_store";
export const id="dl_12fd480c6a970bc928b1";
export const url=new URL("../icons/two_pager_store.svg?v=90b7f3c92151f0a66c222812fd236ad2d5d66283b74890c63f3d7d4cff7dbe23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
