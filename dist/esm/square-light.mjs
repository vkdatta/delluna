export const name="square-light";
export const id="dl_56ac60073fcf63525606";
export const url=new URL("../icons/square-light.svg?v=1b6a1749feedbf6eef04560cd852494946d9a5f78d715d44ecbd142fa2f1155f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
