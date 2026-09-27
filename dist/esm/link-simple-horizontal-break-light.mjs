export const name="link-simple-horizontal-break-light";
export const id="dl_a22a7bedc1bc4a6ba184";
export const url=new URL("../icons/link-simple-horizontal-break-light.svg?v=6812e28ddcab7b1ce3c30cf4702ae97251cf6a60e4d4147b564bd589ec3b302f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
