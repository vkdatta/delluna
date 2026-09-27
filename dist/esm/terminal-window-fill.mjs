export const name="terminal-window-fill";
export const id="dl_f4237c2e97d3565eb52f";
export const url=new URL("../icons/terminal-window-fill.svg?v=5500cb732e88f4fb126e87f95b5384245c0e7674f42ffce380a9957e5c2f385e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
