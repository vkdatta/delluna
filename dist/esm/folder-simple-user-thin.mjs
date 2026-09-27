export const name="folder-simple-user-thin";
export const id="dl_275f8855b8054d959206";
export const url=new URL("../icons/folder-simple-user-thin.svg?v=461d983e3c8eda7c80bf8d94d4f1632262793f83810c4bc66c8c00cca4dbba66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
