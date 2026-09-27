export const name="terminal-window-thin";
export const id="dl_fdd0edfd811841f4be92";
export const url=new URL("../icons/terminal-window-thin.svg?v=588697f86d9251b6d3534a0c04b1c6f1813b200a0a78ee27faecd532de16a5ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
