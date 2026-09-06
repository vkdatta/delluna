export const name="bowling-ball-bold";
export const id="dl_6f330d0708e64569ae63";
export const url=new URL("../icons/bowling-ball-bold.svg?v=811d0587f765216d5c598bdaa78fe8f22b72d5d4242cba1a2ca639fa6be25a63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
