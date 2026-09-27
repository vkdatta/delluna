export const name="square-pen";
export const id="dl_bfde6865c3284c9b8cec";
export const url=new URL("../icons/square-pen.svg?v=d53fb614f9b34d1579ec232bf77a2cd7fc4bcc409f44ba5b13cc96220e830212",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
