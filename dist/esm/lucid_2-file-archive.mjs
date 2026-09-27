export const name="lucid_2-file-archive";
export const id="dl_51bc8ad980f6470eacda";
export const url=new URL("../icons/lucid_2-file-archive.svg?v=9457c14055933a9a1f402676817ec1b315ace4668ede08ad53acc0067134c72e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
