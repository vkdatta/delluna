export const name="p2p-fill";
export const id="dl_b2afea261b954e75b823";
export const url=new URL("../icons/p2p-fill.svg?v=82da4baea5fe6ff21bcc93a315b469cea5b2fbda3c6529491b5f0a8ec2b6ef2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
