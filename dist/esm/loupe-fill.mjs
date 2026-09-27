export const name="loupe-fill";
export const id="dl_6a6526af7a165ed78e7c";
export const url=new URL("../icons/loupe-fill.svg?v=15110f89adb595c8d1fa519b2d49af2106855e6dc8ff00fc9b79f291e4763bad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
