export const name="approval-fill";
export const id="dl_6dadf59401ada8f63b81";
export const url=new URL("../icons/approval-fill.svg?v=98565129e16f8327310b726e564be276e3def034ba86ea76da60eef546408953",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
