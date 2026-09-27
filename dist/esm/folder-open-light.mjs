export const name="folder-open-light";
export const id="dl_43e8cf7b275047db8ad0";
export const url=new URL("../icons/folder-open-light.svg?v=e51108e7f37cd537bb776b3cbeb4dd49b73a6c7a82301f42d6782015577a9f31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
