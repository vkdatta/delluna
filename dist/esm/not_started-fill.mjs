export const name="not_started-fill";
export const id="dl_f50a966c39c63d3a953b";
export const url=new URL("../icons/not_started-fill.svg?v=9df2ff0d7b5c9301c4bcb992e88de78bda0e78ce2da105ecee948f01453ca503",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
