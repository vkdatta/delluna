export const name="wand";
export const id="dl_dd54abcefe064e298c36";
export const url=new URL("../icons/wand.svg?v=374920d872a582908fb5018eb50b07c03aa995d71edad7fa7a43227013cb8c6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
