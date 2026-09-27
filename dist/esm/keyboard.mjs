export const name="keyboard";
export const id="dl_cb54360d3eed4f1a9abe";
export const url=new URL("../icons/keyboard.svg?v=e4f5825f4cf3ddd3c4d0426a671c4ee484d5bad70aca56cb0b94301605f677a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
