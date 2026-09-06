export const name="file-cloud-fill";
export const id="dl_5b0a4b98afe64ceeb5fd";
export const url=new URL("../icons/file-cloud-fill.svg?v=3cbe3191db21586960db45374cbe930a771d770bc273ef2e7023e5236c47cca6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
