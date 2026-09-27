export const name="hand-tap-light";
export const id="dl_5011452b343241d2822f";
export const url=new URL("../icons/hand-tap-light.svg?v=512ba334f23cc01ae88fa81a48310273ac8206811124695b5feb2b25f9a42363",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
