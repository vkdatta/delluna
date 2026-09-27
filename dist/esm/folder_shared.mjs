export const name="folder_shared";
export const id="dl_53e7dd1e23f760c296e4";
export const url=new URL("../icons/folder_shared.svg?v=496edc155e03d067293aaa5ef81448917d14b50340e842251cb8d83295d0a22a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
