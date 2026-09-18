export const name="markdown";
export const id="dl_92148c133077449bb5af";
export const url=new URL("../icons/M/markdown.svg?v=d30b6858b42ef256a1a1b497fce29f6afb2e7c722737c8968e036e89cdbc0cf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
