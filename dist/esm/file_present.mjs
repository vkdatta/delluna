export const name="file_present";
export const id="dl_6fa1840824fd4978945e";
export const url=new URL("../icons/file_present.svg?v=e780c231594bad88bcdef93a43f2d2f957b4779beb32811a72fd83e0a4d7910b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
