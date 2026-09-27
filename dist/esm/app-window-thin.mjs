export const name="app-window-thin";
export const id="dl_9b949910b26848fdafff";
export const url=new URL("../icons/app-window-thin.svg?v=a8e35250e7104bb11c3190c2cc6bb34b70aad499b80eda4ee1daf23c8ac15aca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
