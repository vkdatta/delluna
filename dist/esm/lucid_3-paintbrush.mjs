export const name="lucid_3-paintbrush";
export const id="dl_28b59e88f8544dde9e2e";
export const url=new URL("../icons/lucid_3-paintbrush.svg?v=57e2c79040bbcb300f7dea4fbff24dc23420598eeeecc388058a8549aec0b533",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
