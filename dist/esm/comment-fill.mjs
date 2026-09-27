export const name="comment-fill";
export const id="dl_65b7f5b580ae51455816";
export const url=new URL("../icons/comment-fill.svg?v=b97d8cedf9640b391404cf62b63f7ff172565782c494ab2521248e3a4f4744f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
