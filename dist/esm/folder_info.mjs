export const name="folder_info";
export const id="dl_1fd794e6b388b1b8812c";
export const url=new URL("../icons/folder_info.svg?v=6fe6b326cb0abbbd3aaed42982da67be92d95ff407d35a432f409317d971ab21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
