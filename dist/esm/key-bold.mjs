export const name="key-bold";
export const id="dl_997d3b45825642a9b091";
export const url=new URL("../icons/key-bold.svg?v=104424e9dc685208aaf8396e9361c33faabb170ab04254bc9b923715bf702752",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
