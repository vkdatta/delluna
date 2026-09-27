export const name="university";
export const id="dl_d27b5dba7ecb4ede9ebe";
export const url=new URL("../icons/university.svg?v=e4e992cd0230997e7de0e0a9ab60c6d0d6e0db9e4453e64a92c671dbfb2db364",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
