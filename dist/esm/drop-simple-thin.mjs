export const name="drop-simple-thin";
export const id="dl_1808ca0c88754f3c8d21";
export const url=new URL("../icons/drop-simple-thin.svg?v=8bcb690a3f7f3459633b5a5765b0b0ce595f2a72a4624685149aaae0962a393b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
