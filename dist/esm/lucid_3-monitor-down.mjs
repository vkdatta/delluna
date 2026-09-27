export const name="lucid_3-monitor-down";
export const id="dl_72fe3ce38d764242937e";
export const url=new URL("../icons/lucid_3-monitor-down.svg?v=0205ece49cbb9b680740a92f86c63b2befc093929139f5babf3bd18ff66d5abe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
