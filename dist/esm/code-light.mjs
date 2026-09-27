export const name="code-light";
export const id="dl_2ffec64305124ce799ea";
export const url=new URL("../icons/code-light.svg?v=b55647e86288f82523bbb957b306615efbc4b9d26618cae1f2e8b8873f570ec3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
