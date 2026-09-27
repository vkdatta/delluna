export const name="compress";
export const id="dl_6878bb776c641b792aeb";
export const url=new URL("../icons/compress.svg?v=137b613b469652a6ffc5ba3c2154a2e27b9571ac8a6e455a12da6258e6f12d83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
