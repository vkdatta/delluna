export const name="folder_check_2";
export const id="dl_88b866255af438209b74";
export const url=new URL("../icons/folder_check_2.svg?v=c68c3a37101c57eb3cd4e2145b69ec24d666cc7d8df38c503484236e7bc3caa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
