export const name="list-plus-thin";
export const id="dl_443ed7264df04ed0b994";
export const url=new URL("../icons/list-plus-thin.svg?v=f8fa37d20758de4b64cf6fc5f6d5f859dd5082d1901ac6170ad1d6dc73b94004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
