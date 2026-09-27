export const name="lock-key-open-duotone";
export const id="dl_6dc97c00f3ac470db02c";
export const url=new URL("../icons/lock-key-open-duotone.svg?v=7caee1df151201e41283706f0298e33fbe3277df48cf3463612b40fd03888ba2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
