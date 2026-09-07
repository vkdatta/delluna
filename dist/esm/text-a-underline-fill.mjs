export const name="text-a-underline-fill";
export const id="dl_b21f073faa1b4b79a3ba";
export const url=new URL("../icons/T/text-a-underline-fill.svg?v=1357801dce199d853934f8026c32afc3f8a9b9049f4c9be284edd58ed92cff18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
