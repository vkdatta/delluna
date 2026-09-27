export const name="washing-machine-fill";
export const id="dl_93a49b3db16853d1ef94";
export const url=new URL("../icons/washing-machine-fill.svg?v=8466840178b560e1e59f6e8cd5a42c2816fd45e354c75d0b704abed5071fe03b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
