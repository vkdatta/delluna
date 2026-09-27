export const name="chat-dots-thin";
export const id="dl_0a2a3426e2c9443bb134";
export const url=new URL("../icons/chat-dots-thin.svg?v=b4574a1819032e0c53ade878102444d082ae4c321c2bf14273cde68da7d2d169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
