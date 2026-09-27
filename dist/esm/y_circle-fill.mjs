export const name="y_circle-fill";
export const id="dl_0e76e054fbf48d961d5e";
export const url=new URL("../icons/y_circle-fill.svg?v=7eec3f655edcc56104b6971365c4c5244b5a4b67b7f8f95a194d28f56dd6e0a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
