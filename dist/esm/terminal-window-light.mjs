export const name="terminal-window-light";
export const id="dl_c5b5ef687dde6232a957";
export const url=new URL("../icons/terminal-window-light.svg?v=5cc1e2e58c98cef04087d6e1e50391b00fb9e7a74331102047625c6339289b0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
