export const name="folder-open-duotone";
export const id="dl_7c27b32d0afe4981aaa7";
export const url=new URL("../icons/folder-open-duotone.svg?v=ad6cf2cc6a272fa328b567714526cec202edaf90d785f428c57bf3ee96c6af19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
