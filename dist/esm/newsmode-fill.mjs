export const name="newsmode-fill";
export const id="dl_2739ff8d08d24ebd8c7b";
export const url=new URL("../icons/newsmode-fill.svg?v=a021b6a26b9de8657320546262042b2b189c888e37ff4c7931bbeea99191c9c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
