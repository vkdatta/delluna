export const name="file-html";
export const id="dl_d8a8669c6f444aaaa6be";
export const url=new URL("../icons/file-html.svg?v=f318cabf20bc66383b33742cf41108610de493fa6278409dec3511fb264f3fc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
