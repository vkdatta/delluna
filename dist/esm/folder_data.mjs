export const name="folder_data";
export const id="dl_0b2af0afa76f84b3eba8";
export const url=new URL("../icons/folder_data.svg?v=73245b16bb2fc9e9eb8a6d87b4dcda3f014f1dba7ced9c4f22a4d22340dc4f94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
