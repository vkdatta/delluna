export const name="circle-add";
export const id="dl_79da456066e740439b57";
export const url=new URL("../icons/add/circle-add.svg?v=cb5f2845956fe68b3b8a8e9862df138a352a762928ca2d8f5910681df2806531",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
