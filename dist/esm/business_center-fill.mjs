export const name="business_center-fill";
export const id="dl_8110cfde03ffe31c0fd4";
export const url=new URL("../icons/business_center-fill.svg?v=1cd941313770565cb057c1fc1ce327cf1c060d77a68f87c9e94196c6eaecb9fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
