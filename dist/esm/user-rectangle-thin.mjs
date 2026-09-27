export const name="user-rectangle-thin";
export const id="dl_9d9d0855d5fdd9ad6e8f";
export const url=new URL("../icons/user-rectangle-thin.svg?v=9993968234d92cba8e94aef6e548a796196fb8fa6179640a9fa13151f33c3eda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
