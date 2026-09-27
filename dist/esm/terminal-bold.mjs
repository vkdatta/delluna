export const name="terminal-bold";
export const id="dl_1ee380ee783864f6abd5";
export const url=new URL("../icons/terminal-bold.svg?v=296db174747df545c00c12fb722c683ff2c0a5fd27bf03af7c29730d96f51a55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
