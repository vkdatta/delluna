export const name="tools_phillips-fill";
export const id="dl_702c74b635712633e25b";
export const url=new URL("../icons/tools_phillips-fill.svg?v=74be35b51964ee56c670ab1b1f182906784e3e42c1c7127fa97a37c73d8e8d2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
