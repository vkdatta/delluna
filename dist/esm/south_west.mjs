export const name="south_west";
export const id="dl_63563552c5927a704972";
export const url=new URL("../icons/south_west.svg?v=7754d31cc5d9b64d1ed3749d6372650eddf6cede2fadfb206cfa8134ea6fc5d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
