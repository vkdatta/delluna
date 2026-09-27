export const name="dots-six";
export const id="dl_f85631cec26d452bbe75";
export const url=new URL("../icons/dots-six.svg?v=59adbf251126a907f15b7c1bfaa502e5108fd4bee4522976eb94e9aa5fbad15d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
