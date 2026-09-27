export const name="line-segments-bold";
export const id="dl_f1fea65a9b2f4d34b48a";
export const url=new URL("../icons/line-segments-bold.svg?v=c6efba943694db9089c6f9e1a0223dd5a49e043baecce0572d986ad08ecd62ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
