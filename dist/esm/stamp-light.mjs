export const name="stamp-light";
export const id="dl_0fef59b5a889d0703073";
export const url=new URL("../icons/stamp-light.svg?v=62a2d60b19081a0a953665a5043387fd86249238b6a80f77eeb92170520f8ed6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
