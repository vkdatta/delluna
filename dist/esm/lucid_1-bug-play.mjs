export const name="lucid_1-bug-play";
export const id="dl_e95dcbc0f6ff4fca9f44";
export const url=new URL("../icons/lucid_1-bug-play.svg?v=b49fbb344e28ee9df038fbb9048762c3033c4a5cf4788dc6383fc6e824d99d33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
