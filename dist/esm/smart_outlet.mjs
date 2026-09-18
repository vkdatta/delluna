export const name="smart_outlet";
export const id="dl_8c6ced3f25984b2898a4";
export const url=new URL("../icons/smart_outlet.svg?v=56db20977678dbd2dc5613ec4f9c9afcdd97e29730ffb03b947931275aee58e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
