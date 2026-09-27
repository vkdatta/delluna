export const name="folder_check-fill";
export const id="dl_c47fb8b46cc87a33ca18";
export const url=new URL("../icons/folder_check-fill.svg?v=b30e29244a92b91c95caebcde0bc03afd380c76ca64867f6fae6be764ed49681",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
