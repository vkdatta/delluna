export const name="lucid_3-message-square";
export const id="dl_4a5e4317264148b5b9aa";
export const url=new URL("../icons/lucid_3-message-square.svg?v=919941f651692517cc6662dbd349de5614c4ccb75cf310fba6e1f4064991e4ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
