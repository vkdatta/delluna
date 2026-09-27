export const name="lucid_2-file-box";
export const id="dl_a0203b428a6948e39036";
export const url=new URL("../icons/lucid_2-file-box.svg?v=e4860837d0e0088bacea4abbadd84af29ba49860b1333301dd7ecf41a073494e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
