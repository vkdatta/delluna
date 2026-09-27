export const name="terminal-window-bold";
export const id="dl_378d5b3ffdeeba1d2e88";
export const url=new URL("../icons/terminal-window-bold.svg?v=fe519c00d4581509af2d140f8d5bf36346587ea9c49279beea8492af157f31f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
