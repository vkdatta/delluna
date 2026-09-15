export const name="folder_limited";
export const id="dl_2a9e48893b124e418ebf";
export const url=new URL("../icons/F/folder_limited.svg?v=f8f1c84187b066d5f62194ec947e8863716821fc60075234d54d0e6131df7f86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
