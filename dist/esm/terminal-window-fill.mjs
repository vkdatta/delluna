export const name="terminal-window-fill";
export const id="dl_739a3607e2069fc39116";
export const url=new URL("../icons/terminal-window-fill.svg?v=03817958a57b5b7f23fb5b8d83abb11b3bd8813e3e0ce43715cc729c83fd3e4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
