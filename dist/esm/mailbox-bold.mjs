export const name="mailbox-bold";
export const id="dl_72eb9bfe87aa43d79562";
export const url=new URL("../icons/mailbox-bold.svg?v=6b30156d34e94e6ffa06c2dedc270323b523a93a750f3a423bab62b2d6b37f8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
