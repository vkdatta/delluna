export const name="undo-fill";
export const id="dl_11556b4e4d98509c9770";
export const url=new URL("../icons/undo-fill.svg?v=9b3f2fc935fa9e036c8f9db35f3e192abdb3755ed226f1ddf018e6238f9c42d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
