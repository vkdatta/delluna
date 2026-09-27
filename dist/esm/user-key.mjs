export const name="user-key";
export const id="dl_e85f39688162404198a3";
export const url=new URL("../icons/user-key.svg?v=52668fe450b8135d7e8837461bbf4c3cbda28bb4913e34b7f7f0cd475c711293",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
