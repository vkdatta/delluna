export const name="currency-dollar-thin";
export const id="dl_ca2f967e0dc948b49dd1";
export const url=new URL("../icons/currency-dollar-thin.svg?v=a29855445c4539dea6ce832daed0f6b1524957d71a8c08c5d47dfef551302b93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
