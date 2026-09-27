export const name="lucid_1-calendar-cog";
export const id="dl_71d0a5cb8c7b46b5bc53";
export const url=new URL("../icons/lucid_1-calendar-cog.svg?v=7b8ae3c8e8281947bcad4270c21574e872aa0348f4d0fb2897cd7dcf0598d935",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
