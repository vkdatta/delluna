export const name="arrow-line-down-left";
export const id="dl_50f2ec0f0d214ea1b303";
export const url=new URL("../icons/arrow-line-down-left.svg?v=59e2e0a32c1fd85ef4e3a55b51d2ee8e810b756e0c910fee44a2a0160791fecc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
