export const name="task";
export const id="dl_f8c32404cd941bf06794";
export const url=new URL("../icons/task.svg?v=08e9e6d583a00fd3f76f6584f332b3c63fc876428d6d35aeff17ad3e7b3d962b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
