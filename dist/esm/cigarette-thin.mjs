export const name="cigarette-thin";
export const id="dl_48f6c7394d45488e9921";
export const url=new URL("../icons/cigarette-thin.svg?v=d5fbe7f176ff6ac2aa19867c410275d983949639d8c55a34e27183d0a636c410",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
