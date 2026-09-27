export const name="unfold_down";
export const id="dl_d8b3f26304b537ae54e1";
export const url=new URL("../icons/unfold_down.svg?v=cd09732f9d75fdf141f6a4e1a7f3a75c8c1134e3b899743a31f5ede5ab99714b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
