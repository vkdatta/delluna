export const name="terminal";
export const id="dl_8e1aed98f87a4c00b81c";
export const url=new URL("../icons/terminal.svg?v=b847e8197b602e608a1875fed40b2be0d5ecf5f3a0c857158dc0b4e510169665",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
