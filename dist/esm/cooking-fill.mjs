export const name="cooking-fill";
export const id="dl_83920968873c4ca1a25b";
export const url=new URL("../icons/C/cooking-fill.svg?v=d0e05538b3a65504bb0fbf9541942a3982a6c7ff11b7ab3b06dd472aab34c8c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
