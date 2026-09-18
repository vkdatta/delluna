export const name="trail_length-fill";
export const id="dl_8ba59e1ccd5a4ef1a15c";
export const url=new URL("../icons/T/trail_length-fill.svg?v=875c946669ea0461a0cb2d93fb1aa9a7b742317fb323004e5758e22154683007",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
