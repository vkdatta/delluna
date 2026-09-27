export const name="lock-laminated";
export const id="dl_ab5871be08af4091b013";
export const url=new URL("../icons/lock-laminated.svg?v=90eb9916bd34933a98ec09d8cec345ba9b4199f3fa877412cbccedae2c6f22f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
