export const name="shopping-bag-bold";
export const id="dl_0174504e1c2d551f95e8";
export const url=new URL("../icons/shopping-bag-bold.svg?v=81cbfc0f65fa9ea496eb07ab88d97d074204012a22f1519a2fcb8df903c4c096",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
