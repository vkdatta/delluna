export const name="wifi-slash-bold";
export const id="dl_6a626c6423e85d42de41";
export const url=new URL("../icons/wifi-slash-bold.svg?v=e76a83024445b5cb4337bb83eb9430448e1943b71f1873206aa895bd372622d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
