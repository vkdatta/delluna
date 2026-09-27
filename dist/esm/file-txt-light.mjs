export const name="file-txt-light";
export const id="dl_20c1878074a045a581c8";
export const url=new URL("../icons/file-txt-light.svg?v=b737e31f302864a9a284ad524c578ce1728f5b8c597a25a8b323090a3ce2967e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
