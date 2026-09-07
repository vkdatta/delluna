export const name="flag-duotone";
export const id="dl_2b7edcee814f4760a314";
export const url=new URL("../icons/flag-duotone.svg?v=2b3bb7625aa29bbd03919087199c4d58aeb67dc5e3755a36c31f04a078d364f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
