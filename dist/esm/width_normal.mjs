export const name="width_normal";
export const id="dl_3fc27b454b52c946379b";
export const url=new URL("../icons/width_normal.svg?v=c47f0929f82dcc98e8c65580d57d43b230a258645d7b96317fb4d4fd921c0b78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
