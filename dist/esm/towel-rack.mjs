export const name="towel-rack";
export const id="dl_908187b6a64d4e01816d";
export const url=new URL("../icons/towel-rack.svg?v=3d34526f93be065258c09f70a4573c8c6789034f45203f2ad87ff2462c35adbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
