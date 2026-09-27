export const name="fireplace-fill";
export const id="dl_f05fb44022a5932f3c92";
export const url=new URL("../icons/fireplace-fill.svg?v=92933c247e2fb19610796b0d379622bbfef2f5eb0a3c33e122354b855a88654d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
