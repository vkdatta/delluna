export const name="shopping-bag-thin";
export const id="dl_838de173bc1b49499ccb";
export const url=new URL("../icons/S/shopping-bag-thin.svg?v=adfb3496ee03f2a28282b5e3c80e9e822ccc89dfd30ff3c6e91f5f8eaa71b5e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
