export const name="user-switch-fill";
export const id="dl_ab944deea23473e2095a";
export const url=new URL("../icons/user-switch-fill.svg?v=17edd78174aa7f05554f8b794c9d1b0c079914378072308949cef93517dec5f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
