export const name="orange-slice-light";
export const id="dl_be980facbfe34aea838b";
export const url=new URL("../icons/orange-slice-light.svg?v=da5a3096dc07635723b106e99cdb012cd479cecae46d9c4566cef3b798a20de8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
