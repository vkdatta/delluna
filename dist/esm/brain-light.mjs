export const name="brain-light";
export const id="dl_007ad488bb6e49149e8c";
export const url=new URL("../icons/brain-light.svg?v=e4f02d9ebecf39710bd7316119107394fbf230021ffab9d4b6b0a2f3e1af94eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
