export const name="smart_outlet-fill";
export const id="dl_666fc1002553ed24b260";
export const url=new URL("../icons/smart_outlet-fill.svg?v=405bd950c11e9ed70d13bd4d190a1324a04417fab9333346c567cb46552e166e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
