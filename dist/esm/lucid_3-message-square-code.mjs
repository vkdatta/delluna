export const name="lucid_3-message-square-code";
export const id="dl_6892ff6163fa4086aaee";
export const url=new URL("../icons/lucid_3-message-square-code.svg?v=dbafd9b663e644100485a1cc31a902e2154787e259f10c4b42c3e66565fb60db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
