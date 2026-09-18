export const name="list_alt_add";
export const id="dl_9172a3fef7ab46e0a64a";
export const url=new URL("../icons/list_alt_add.svg?v=93d8e04bd2741a13140f2eb9c86727c2031752e9f10b4f11a096f673fbeadc00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
