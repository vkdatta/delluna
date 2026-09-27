export const name="terminal-window-bold";
export const id="dl_06f9723c0a47efacee93";
export const url=new URL("../icons/terminal-window-bold.svg?v=3faa2a1a7d5d08721f710140aea816bdee78d1a5e2de9d2e3bf2cb287fdc8012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
