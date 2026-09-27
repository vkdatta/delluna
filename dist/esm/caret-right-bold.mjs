export const name="caret-right-bold";
export const id="dl_c1fa855f6b58464a97de";
export const url=new URL("../icons/caret-right-bold.svg?v=5a99ef3c5133a7d74bfafb828f44e6acbab28d0fbaac554b04f981dec79fcbbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
