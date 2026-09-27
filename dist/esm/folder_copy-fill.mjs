export const name="folder_copy-fill";
export const id="dl_2a9e5b07425189edcc18";
export const url=new URL("../icons/folder_copy-fill.svg?v=140a80f46289ca4cabdfd688a0665d4d383326dabba01ef79c887011e2c8c0cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
