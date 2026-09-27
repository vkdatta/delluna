export const name="inbox_customize";
export const id="dl_090d3e4b8869eb3dbaa6";
export const url=new URL("../icons/inbox_customize.svg?v=90de1b60b82b4d0c57e27a9c19c69aabadb50969405eb2ebb58d3d6cebf98fbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
