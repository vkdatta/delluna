export const name="terminal-window-duotone";
export const id="dl_0f3ae3f3e961ffb0e60b";
export const url=new URL("../icons/terminal-window-duotone.svg?v=666366d1b791cf036a4a86c28b0abb9d4ac8ff647401fa515c1f64b0c818c63e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
