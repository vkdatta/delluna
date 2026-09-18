export const name="merge-fill";
export const id="dl_62744cfe3c0a41bdb3d6";
export const url=new URL("../icons/merge-fill.svg?v=e7648482fd25a1c02606b4c9788cb326a0a0818f0d7823b71d0c0f57e9a0df2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
