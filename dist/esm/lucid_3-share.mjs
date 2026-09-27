export const name="lucid_3-share";
export const id="dl_319b309b41bc43e1bb11";
export const url=new URL("../icons/lucid_3-share.svg?v=72d0f52125e886844e1329c03c7319438fae2c9c7b2740e80a76a24f68052ce9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
