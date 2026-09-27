export const name="bowl-steam-fill";
export const id="dl_a933438586fd45778d16";
export const url=new URL("../icons/bowl-steam-fill.svg?v=4314faef93619dbe2294915283f3385dcd8798376abd55a6fb4eacf3e00d5941",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
