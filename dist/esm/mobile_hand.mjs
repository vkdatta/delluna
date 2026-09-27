export const name="mobile_hand";
export const id="dl_9b34d0a4ca6556aaf067";
export const url=new URL("../icons/mobile_hand.svg?v=c2cedbde70164909ce6c98e539eba1baa2751df1a28e7591ef23b5bb77c026e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
