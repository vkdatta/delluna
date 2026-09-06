export const name="files-bold";
export const id="dl_f544ea2bb2c2406d808a";
export const url=new URL("../icons/files-bold.svg?v=b3cce10cd37b93c7e4315020666703bf1d831b7f29802922bb6a1889621efbfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
