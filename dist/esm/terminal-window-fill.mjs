export const name="terminal-window-fill";
export const id="dl_9591799b10ffd6da7325";
export const url=new URL("../icons/terminal-window-fill.svg?v=35ae0aa334e570d44ac77ec031f038e89ab82e25d56ba26c18760910130ecdc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
