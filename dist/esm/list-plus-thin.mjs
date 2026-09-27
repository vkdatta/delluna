export const name="list-plus-thin";
export const id="dl_443ed7264df04ed0b994";
export const url=new URL("../icons/list-plus-thin.svg?v=a0fe1ed6e42e3a0ea0a1d5f609a7ca36ed52af2bac983347526a96a1510aebb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
