export const name="chat_apps_script-fill";
export const id="dl_dd9b2b958a80965c22b3";
export const url=new URL("../icons/chat_apps_script-fill.svg?v=e5eeefdbf0536782bf9ceb4ea82fcc26d27dcf5aea85fda147dd515ab3a58162",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
