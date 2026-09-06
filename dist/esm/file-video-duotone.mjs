export const name="file-video-duotone";
export const id="dl_beb73a7c878e4ca5bf34";
export const url=new URL("../icons/file-video-duotone.svg?v=1aa36d02b655d240f00f9169c08cda6b300757ff5026d65cd1cddfb6198ae31d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
