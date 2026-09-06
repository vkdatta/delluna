export const name="file-zip-bold";
export const id="dl_df67dcc4967b41c9bcaf";
export const url=new URL("../icons/file-zip-bold.svg?v=4f36ef04c1fa0ced9deebe16a0ec8fc2ac87cdcb94cd16407428e4d5e27c40c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
