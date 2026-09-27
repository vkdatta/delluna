export const name="folder-simple-plus-fill";
export const id="dl_10f7faceafc44db28999";
export const url=new URL("../icons/folder-simple-plus-fill.svg?v=47521f76ceb683c650dee865e59fe2a355526e504804d7732bd24e8b1fd454b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
