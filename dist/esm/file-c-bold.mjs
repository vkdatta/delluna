export const name="file-c-bold";
export const id="dl_ea697ae4ce8c492c9616";
export const url=new URL("../icons/file-c-bold.svg?v=8474ba6a294e42fe1aa14905bb70c87d0f8da921279f6914aa63d2bb39b57851",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
