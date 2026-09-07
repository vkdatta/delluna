export const name="terminal-window-bold";
export const id="dl_1d960d8e33fb42b3a9d8";
export const url=new URL("../icons/T/terminal-window-bold.svg?v=5fbfa0fd530447fe5e1aaef8f78f98475b752af545daf008adb5adbfdc5f26b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
