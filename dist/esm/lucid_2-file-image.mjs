export const name="lucid_2-file-image";
export const id="dl_b9e00dd4887147c3a595";
export const url=new URL("../icons/lucid_2-file-image.svg?v=d998e403d9e99c8488b0a95f88b1fe7bc061b4c4ebdad0934ed690b39992380a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
