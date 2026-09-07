export const name="toggle-left-duotone";
export const id="dl_5e5e3bd6e7014616b587";
export const url=new URL("../icons/T/toggle-left-duotone.svg?v=f3aab8d1641e65a9e621870653ab1b24aed147b5ff0ce824996c64f706f24c6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
