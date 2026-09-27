export const name="minor_crash-fill";
export const id="dl_54966abc72132f8d52ee";
export const url=new URL("../icons/minor_crash-fill.svg?v=91f791895126d7a6bf95382072d9bbc7565d8303ba8aafb3ded91cf4b4af29c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
