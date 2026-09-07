export const name="wifi-slash-thin";
export const id="dl_33fca224aabb4ab895b9";
export const url=new URL("../icons/W/wifi-slash-thin.svg?v=8c49a88440916f1f47acc95633d4ac58a250b69366d88e47becf718e16190f8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
