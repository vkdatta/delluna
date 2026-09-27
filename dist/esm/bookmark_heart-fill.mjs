export const name="bookmark_heart-fill";
export const id="dl_fd50d797d66195a72953";
export const url=new URL("../icons/bookmark_heart-fill.svg?v=71dc5a6f30bb9803a6fd7b8058d3dd1ea55f8af9f1e99227a79370c0f8cac751",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
