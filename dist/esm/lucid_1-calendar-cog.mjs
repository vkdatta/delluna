export const name="lucid_1-calendar-cog";
export const id="dl_71d0a5cb8c7b46b5bc53";
export const url=new URL("../icons/lucid_1-calendar-cog.svg?v=870bcf44df64b424d9fc2231b43b69851e46ea6835a986d4d62183673c96afea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
