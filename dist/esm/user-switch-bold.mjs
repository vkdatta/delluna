export const name="user-switch-bold";
export const id="dl_9f5b1a7b69973afb3636";
export const url=new URL("../icons/user-switch-bold.svg?v=3f0dc412bd6fc56c20007c7f920534935956298cb0c68c3996bf151ad56bf9da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
