export const name="lucid_2-file-archive";
export const id="dl_51bc8ad980f6470eacda";
export const url=new URL("../icons/lucid_2-file-archive.svg?v=25790ef3b3ed77b79cebe4cd61b7729f973cda53d763553da1ed052cf3c8ff3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
