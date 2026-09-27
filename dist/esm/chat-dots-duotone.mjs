export const name="chat-dots-duotone";
export const id="dl_2c420bd460724ed39ad7";
export const url=new URL("../icons/chat-dots-duotone.svg?v=8fee523176ec323be2bde6e1e4258871c15c19623b48d3ecb5a7423fe55ab23f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
