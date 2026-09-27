export const name="file-video-thin";
export const id="dl_987b715a184148a48cd4";
export const url=new URL("../icons/file-video-thin.svg?v=29f61e42570f3bcdb843c58f095aca7d83ceaa8c2d5c66907729493c9a5c017a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
