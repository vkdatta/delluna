export const name="terminal-window-light";
export const id="dl_c203cbf66471802572e3";
export const url=new URL("../icons/terminal-window-light.svg?v=244b98421455dacdf00f206ea755bf7a4cb662282c62375fc0bf2304015702e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
