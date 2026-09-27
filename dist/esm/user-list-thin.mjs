export const name="user-list-thin";
export const id="dl_b6bbcab11658f6c495d7";
export const url=new URL("../icons/user-list-thin.svg?v=12b6ff074e1f50161f21f9f2563d50495c57b59dcb899a700f816d07c0d58613",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
