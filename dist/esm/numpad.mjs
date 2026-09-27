export const name="numpad";
export const id="dl_ce36f3b2b1d343e69052";
export const url=new URL("../icons/numpad.svg?v=59aac8473dc35382cc5475060baded1aa25e981ffd1859a18cb97d08ffaac93a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
