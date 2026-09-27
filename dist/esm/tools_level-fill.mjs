export const name="tools_level-fill";
export const id="dl_f0a8ab81d9684f57fae8";
export const url=new URL("../icons/tools_level-fill.svg?v=455c263698cfd9d842053d389d231c5309860eb3f24c44579619b90493e72de7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
